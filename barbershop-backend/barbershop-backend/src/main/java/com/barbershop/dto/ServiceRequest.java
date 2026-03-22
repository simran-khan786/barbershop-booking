package com.barbershop.dto;

import lombok.Data;

@Data
public class ServiceRequest {
    private String serviceName;
    private Double price;
    private Integer duration;
}