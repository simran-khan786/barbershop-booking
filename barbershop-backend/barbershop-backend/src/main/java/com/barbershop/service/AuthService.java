package com.barbershop.service;

import com.barbershop.dto.*;
import com.barbershop.entity.Role;
import com.barbershop.entity.User;
import com.barbershop.repository.UserRepository;
import com.barbershop.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final EmailService emailService;

    public AuthResponse register(RegisterRequest request){

        if(repository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("Email already registered");
        }


        Role userRole = Role.USER;

        if (request.getRole() != null && request.getRole().equalsIgnoreCase("OWNER")) {
            userRole = Role.OWNER;
        }

        User user = User.builder()
                .name(request.getFirstName() + " " + request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(userRole)
                .build();

        repository.save(user);

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, user.getRole().name());
    }

    public AuthResponse login(LoginRequest request){

        User user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, user.getRole().name());
    }

    public void forgotPassword(String email){

        User user = repository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = UUID.randomUUID().toString();

        user.setResetToken(token);
        user.setTokenExpiry(LocalDateTime.now().plusMinutes(15));

        repository.save(user);

        String link = "http://localhost:5173/reset-password?token=" + token;

        emailService.sendResetEmail(user.getEmail(), link);
    }

    public void resetPassword(String token, String newPassword) {

        User user = repository.findByResetToken(token)
                .orElseThrow(() -> new RuntimeException("Invalid token"));

        if (user.getTokenExpiry().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Token expired");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setResetToken(null);
        user.setTokenExpiry(null);

        repository.save(user);
    }
}