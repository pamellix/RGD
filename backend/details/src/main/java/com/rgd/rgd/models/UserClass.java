package com.rgd.rgd.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table (name = "user_class")
public class UserClass {
    
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String login;
    private String password;
    private String role;
}