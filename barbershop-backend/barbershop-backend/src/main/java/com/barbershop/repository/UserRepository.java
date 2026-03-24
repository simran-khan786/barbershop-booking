package com.barbershop.repository;

import com.barbershop.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

<<<<<<< HEAD
public interface UserRepository extends MongoRepository<User, String> {
=======
public interface UserRepository extends MongoRepository<User,Long> {
>>>>>>> 5a7d2a83293840a71efa8973dfd5ed59e7d1f1ca

    Optional<User> findByEmail(String email);
    Optional<User> findByResetToken(String token);
}