package com.barbershop.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    private String id; // ✅ Mongo uses String id

    private String name;
    private String email;
    private String password;
    private Role role;

    // ✅ Forgot Password fields
    private String resetToken;
    private LocalDateTime tokenExpiry;

}