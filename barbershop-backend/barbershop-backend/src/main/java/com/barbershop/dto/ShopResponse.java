package com.barbershop.dto;

import com.barbershop.entity.ShopService;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ShopResponse {

    private String id;
    private String shopName;
    private String city;
    private String imageUrl;
    private double distance;
    private List<ShopService> services;
}