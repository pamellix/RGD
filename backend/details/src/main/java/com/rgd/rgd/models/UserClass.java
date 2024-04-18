package com.rgd.rgd.models;

import java.sql.Date;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "user_class")
public class UserClass {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_class_seq_generator")
    @SequenceGenerator(name = "user_class_seq_generator", sequenceName = "user_class_seq", allocationSize = 1)
    private Long id;

    @Column(unique = true)
    private String login;
    private String password;
    private String role;
}