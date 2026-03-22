package com.barbershop.entity;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShopService {

    private String serviceName;
    private Double price;
    private Integer duration;
}