package com.barbershop.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LocationService {

    private final String API_KEY = "d4d4b3d48e7c47a88fe5769f2152156b";

    public String getCityFromCoordinates(double lat, double lng) {
        try {
            String url = "https://api.opencagedata.com/geocode/v1/json?q="
                    + lat + "+" + lng
                    + "&key=" + API_KEY;

            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.getForObject(url, String.class);

            if (response == null) {
                throw new RuntimeException("Empty response ❌");
            }

            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response);

            JsonNode results = root.path("results");

            if (results.isEmpty()) {
                throw new RuntimeException("No results ❌");
            }

            JsonNode components = results.get(0).path("components");

            // 🔥 SMART CITY EXTRACTION
            String city = components.path("city").asText();

            if (city.isEmpty()) {
                city = components.path("town").asText();
            }

            if (city.isEmpty()) {
                city = components.path("village").asText();
            }

            if (city.isEmpty()) {
                city = components.path("state_district").asText();
            }

            if (city.isEmpty()) {
                throw new RuntimeException("City not found ❌");
            }

            return city;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to fetch city ❌");
        }
    }
}