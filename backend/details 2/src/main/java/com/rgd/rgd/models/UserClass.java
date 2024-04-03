package com.rgd.rgd.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class UserClass {
    
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String login;
    private String password;
    private String role;
}