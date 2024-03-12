package com.rgd.rgd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rgd.rgd.models.MyUser;

import java.util.Optional;

public interface UserRepository extends JpaRepository<MyUser, Long> {
    Optional<MyUser> findByName(String username);
}