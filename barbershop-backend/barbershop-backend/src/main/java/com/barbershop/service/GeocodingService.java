package com.barbershop.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

@Service
public class GeocodingService {

    private final String API_KEY = "d4d4b3d48e7c47a88fe5769f2152156b";

    public double[] getLatLngFromAddress(String address) {
        try {
            String url = "https://api.opencagedata.com/geocode/v1/json?q="
                    + address.replace(" ", "%20")
                    + "&key=" + API_KEY;

            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.getForObject(url, String.class);

            JSONObject json = new JSONObject(response);
            JSONObject geometry = json.getJSONArray("results")
                    .getJSONObject(0)
                    .getJSONObject("geometry");

            double lat = geometry.getDouble("lat");
            double lng = geometry.getDouble("lng");

            return new double[]{lat, lng};

        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch coordinates ❌");
        }
    }
}