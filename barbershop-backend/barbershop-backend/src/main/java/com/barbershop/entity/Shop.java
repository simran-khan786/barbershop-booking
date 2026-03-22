package com.barbershop.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalTime;
import java.util.List;

@Document(collection = "shops")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Shop {

    @Id
    private String id;

    // BASIC
    private String shopName;
    private String ownerName;
    private String phoneNumber;

    // LOCATION
    private String address;
    private String city;
    private String state;
    private String pincode;

    // TIMING
    private LocalTime openingTime;
    private LocalTime closingTime;
    private LocalTime breakStart;
    private LocalTime breakEnd;

    // IMAGE
    private String imageUrl;

    // RELATION (Mongo style)
    private String userId; // store user ID instead of relation

    // SERVICES (Embedded)
    private List<com.barbershop.entity.ShopService> services;
}