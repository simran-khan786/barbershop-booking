package com.barbershop.controller;

import com.barbershop.dto.AddShopRequest;
import com.barbershop.service.ShopServiceManager;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.barbershop.security.JwtService;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/shops")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ShopController {

    private final ShopServiceManager shopService;
    private final JwtService jwtService;

    @PostMapping
    public ResponseEntity<?> addShop(@RequestBody AddShopRequest request,HttpServletRequest httpRequest) {
        try {

            // 🔐 GET TOKEN FROM HEADER
            String authHeader = httpRequest.getHeader("Authorization");

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(401).body("Token missing ");
            }

            String token = authHeader.substring(7);

            // 🔑 EXTRACT EMAIL FROM TOKEN
            String userEmail = jwtService.extractEmail(token);

            return ResponseEntity.ok(
                    shopService.addShop(request, userEmail)
            );

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @GetMapping
    public ResponseEntity<?> getAllShops() {
        try {
            return ResponseEntity.ok(shopService.getAllShops());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}