package com.barbershop.entity;


import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

<<<<<<< HEAD
    // ✅ Forgot Password fields
    private String resetToken;
    private LocalDateTime tokenExpiry;

}
=======
    @Column(unique = true)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;
}
>>>>>>> a0b73ffadab2a65174a54ef40e30f365b94d424a
