package com.rgd.rgd.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "registrator")
public class Registrator {
    
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true, name = "dec_number")
    private String decNumber;
    private String name;
    private String data;
    private String creator;
    @Column(name = "first_use")
    private String firstUse;
    private String note;
}