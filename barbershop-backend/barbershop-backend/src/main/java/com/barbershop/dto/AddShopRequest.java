package com.barbershop.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import java.time.LocalTime;
import java.util.List;

@Data
public class AddShopRequest {

    @NotBlank(message = "Shop name is required")
    private String shopName;

    @NotBlank(message = "Owner name is required")
    private String ownerName;

    @NotBlank(message = "Phone is required")
    private String phoneNumber;

    @NotBlank(message = "City is required")
    private String city;


    private String address;
    private String state;
    private String pincode;

    private LocalTime openingTime;
    private LocalTime closingTime;
    private LocalTime breakStart;
    private LocalTime breakEnd;

    private double latitude;
    private double longitude;

    private String imageUrl;

    private List<ServiceRequest> services;
}