package com.rgd.rgd.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "detail_class")
public class DetailClass {
    
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String detail;
    private String classificator;
    private String description;
}