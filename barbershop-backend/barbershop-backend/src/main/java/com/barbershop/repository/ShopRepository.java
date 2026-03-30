package com.barbershop.repository;

import com.barbershop.entity.Shop;
import org.springframework.data.mongodb.repository
        .MongoRepository;

public interface ShopRepository extends MongoRepository<Shop, String> {

    boolean existsByShopNameAndUserId(String shopName, String userId);
}