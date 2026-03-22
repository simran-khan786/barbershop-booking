package com.barbershop.service;

import com.barbershop.dto.AddShopRequest;
import com.barbershop.entity.Shop;
import com.barbershop.entity.ShopService;
import com.barbershop.entity.User;
import com.barbershop.repository.ShopRepository;
import com.barbershop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ShopServiceManager {

    private final ShopRepository shopRepository;
    private final UserRepository userRepository;

    public String addShop(AddShopRequest request, String userEmail) {

        // 🔍 Find user
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // ✂️ Map services
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

        // 🏪 Create shop
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
                .userId(user.getId()) // ✅ Mongo relation
                .services(services)
                .build();

        shopRepository.save(shop);

        return "Shop added successfully ✅";
    }
    public List<Shop> getAllShops() {
        return shopRepository.findAll();
    }
}