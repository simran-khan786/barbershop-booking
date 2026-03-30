package com.barbershop.service;

import com.barbershop.dto.AddShopRequest;
import com.barbershop.dto.ShopResponse;
import com.barbershop.entity.Shop;
import com.barbershop.entity.ShopService;
import com.barbershop.entity.User;
import com.barbershop.repository.ShopRepository;
import com.barbershop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ShopServiceManager {

    private final ShopRepository shopRepository;
    private final UserRepository userRepository;

    @Autowired
    private LocationService locationService;

    @Autowired
    private GeocodingService geocodingService;

    // ✅ ADD SHOP
    public String addShop(AddShopRequest request, String userEmail) {

        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        boolean exists = shopRepository.existsByShopNameAndUserId(
                request.getShopName(),
                user.getId()
        );

        if (exists) {
            throw new RuntimeException("Shop already exists ❌");
        }

        // ✅ MAP SERVICES
        List<ShopService> services = null;

        if (request.getServices() != null) {
            services = request.getServices().stream()
                    .map(s -> ShopService.builder()
                            .serviceName(s.getServiceName())
                            .price(s.getPrice())
                            .duration(s.getDuration())
                            .build())
                    .collect(Collectors.toList());
        }

        double latitude = request.getLatitude();
        double longitude = request.getLongitude();

// 🔥 If frontend ne lat/lng nahi diya → OpenCage use karo
        if (latitude == 0 || longitude == 0) {

            String fullAddress = request.getAddress() + ", " + request.getCity();

            double[] coords = geocodingService.getLatLngFromAddress(fullAddress);

            latitude = coords[0];
            longitude = coords[1];
        }

        // ✅ CREATE SHOP
        Shop shop = Shop.builder()
                .shopName(request.getShopName())
                .ownerName(request.getOwnerName())
                .phoneNumber(request.getPhoneNumber())
                .address(request.getAddress())
                .city(request.getCity())
                .state(request.getState())
                .pincode(request.getPincode())
                .openingTime(request.getOpeningTime())
                .closingTime(request.getClosingTime())
                .breakStart(request.getBreakStart())
                .breakEnd(request.getBreakEnd())
                .imageUrl(request.getImageUrl())
                .latitude(latitude)
                .longitude(longitude)
                .userId(user.getId())
                .services(services)
                .build();

        shopRepository.save(shop);

        return "Shop added successfully ✅";
    }

    // ✅ ALL SHOPS (FEATURED)
    public List<ShopResponse> getAllShops() {
        return shopRepository.findAll()
                .stream()
                .map(shop -> ShopResponse.builder()
                        .id(shop.getId())
                        .shopName(shop.getShopName())
                        .city(shop.getCity())
                        .imageUrl(
                                (shop.getImageUrl() == null || shop.getImageUrl().isEmpty())
                                        ? "https://via.placeholder.com/300"
                                        : shop.getImageUrl()
                        )
                        .services(shop.getServices()) // ✅ ADD THIS
                        .build())
                .collect(Collectors.toList());
    }

    // ✅ NEARBY SHOPS
    public List<ShopResponse> getNearbyShops(double userLat, double userLng, double radius){

        // 🔥 STEP 1: Get user city from API
        String userCity = locationService.getCityFromCoordinates(userLat, userLng);

        List<Shop> shops = shopRepository.findAll();

        return shops.stream()
                // ✅ STEP 2: Filter same city
                .filter(shop -> shop.getCity() != null &&
                        shop.getCity().equalsIgnoreCase(userCity))

                // ✅ STEP 3: Calculate distance
                .map(shop -> {
                    double distance = calculateDistance(
                            userLat,
                            userLng,
                            shop.getLatitude(),
                            shop.getLongitude()
                    );
                    if (distance < 0.05) {
                        distance = 0.1;
                    }
                    return ShopResponse.builder()
                            .id(shop.getId())
                            .shopName(shop.getShopName())
                            .city(shop.getCity())
                            .imageUrl(
                                    (shop.getImageUrl() == null || shop.getImageUrl().isEmpty())
                                            ? "https://via.placeholder.com/300"
                                            : shop.getImageUrl()
                            )
                            .services(shop.getServices())
                            .distance(distance)
                            .build();
                })

                .filter(shop -> {
                    if (radius >= 50) return true; // 👉 Entire City case
                    return shop.getDistance() <= radius;
                })

                // ✅ STEP 4: Sort by nearest
                .sorted((a, b) -> Double.compare(a.getDistance(), b.getDistance()))


                .collect(Collectors.toList());
    }

    // ✅ DISTANCE CALCULATION
    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371;

        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);

        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }
}