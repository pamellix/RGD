package com.rgd.rgd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rgd.rgd.models.UserClass;

public interface UserRepository extends JpaRepository<UserClass, Long> {
    void deleteByLogin(String login);
    UserClass findByLogin(String login);
}