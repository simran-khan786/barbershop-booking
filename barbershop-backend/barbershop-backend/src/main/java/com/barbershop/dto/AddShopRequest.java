package com.barbershop.dto;

import lombok.Data;
import java.time.LocalTime;
import java.util.List;

@Data
public class AddShopRequest {

    private String shopName;
    private String ownerName;
    private String phoneNumber;

    private String address;
    private String city;
    private String state;
    private String pincode;

    private LocalTime openingTime;
    private LocalTime closingTime;
    private LocalTime breakStart;
    private LocalTime breakEnd;

    private String imageUrl;

    private List<ServiceRequest> services;
}