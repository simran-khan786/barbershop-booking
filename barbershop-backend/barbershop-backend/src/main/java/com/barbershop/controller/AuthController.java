package com.barbershop.controller;

import com.barbershop.dto.*;
import com.barbershop.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService service;

    @PostMapping("/register/user")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {
        try {
            return ResponseEntity.ok(service.registerUser(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/register/owner")
    public ResponseEntity<?> registerOwner(@RequestBody RegisterRequest request) {
        try {
            return ResponseEntity.ok(service.registerOwner(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            return ResponseEntity.ok(service.login(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        try {
            service.forgotPassword(request.getEmail());
            return ResponseEntity.ok("Reset link sent to email");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        try {
            service.resetPassword(request.getToken(), request.getNewPassword());
            return ResponseEntity.ok("Password reset successful");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

