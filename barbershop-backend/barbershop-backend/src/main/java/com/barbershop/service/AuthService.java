package com.barbershop.service;

import com.barbershop.dto.*;
import com.barbershop.entity.Role;
import com.barbershop.entity.User;
import com.barbershop.repository.UserRepository;
import com.barbershop.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthResponse registerUser(RegisterRequest request){

        if(repository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("Email already registered");
        }

        User user = User.builder()
                .name(request.getFirstName() + " " + request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
<<<<<<< HEAD
                .role(Role.USER) // ✅ FIXED
                .build();

        repository.save(user);

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, user.getRole().name());
    }

    public AuthResponse registerOwner(RegisterRequest request){

        if(repository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("Email already registered");
        }

        User user = User.builder()
                .name(request.getFirstName() + " " + request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.OWNER) // ✅ FIXED
=======
                .role(Role.USER)
>>>>>>> a0b73ffadab2a65174a54ef40e30f365b94d424a
                .build();

        repository.save(user);

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token);
    }

    public AuthResponse login(LoginRequest request){

        User user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());
        return new AuthResponse(token);

    }
}