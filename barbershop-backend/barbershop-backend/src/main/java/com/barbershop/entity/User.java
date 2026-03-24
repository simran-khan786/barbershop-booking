package com.barbershop.entity;

<<<<<<< HEAD
=======

>>>>>>> 5a7d2a83293840a71efa8973dfd5ed59e7d1f1ca
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

<<<<<<< HEAD
import java.time.LocalDateTime;

@Document(collection = "users")
=======
import java.time.LocalDateTime; // ✅ IMPORTANT

@Document(collection = "user")
>>>>>>> 5a7d2a83293840a71efa8973dfd5ed59e7d1f1ca
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
<<<<<<< HEAD
public class User {

    @Id
    private String id; // ✅ Mongo uses String id
=======

public class User {

    @Id
    private String id;
>>>>>>> 5a7d2a83293840a71efa8973dfd5ed59e7d1f1ca

    private String name;
    private String email;
    private String password;
    private Role role;

<<<<<<< HEAD
    // ✅ Forgot Password fields
    private String resetToken;
    private LocalDateTime tokenExpiry;

=======

    private String email;

    private String password;


    private Role role;

    // ✅ Forgot Password fields
    private String resetToken;
    private LocalDateTime tokenExpiry;
>>>>>>> 5a7d2a83293840a71efa8973dfd5ed59e7d1f1ca
}