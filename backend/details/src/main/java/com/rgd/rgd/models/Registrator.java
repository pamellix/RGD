package com.rgd.rgd.models;

import java.sql.Date;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "registrator")
public class Registrator {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "registrator_seq_generator")
    @SequenceGenerator(name = "registrator_seq_generator", sequenceName = "registrator_id_seq", allocationSize = 1)
    private Long id;

    private String code;

    @Column(unique = true, name = "dec_number")
    private String decNumber;

    private String name;

    @Column(name = "make_date")
    private Date makeDate;

    private String creator;

    @Column(name = "first_use")
    private String firstUse;

    private String note;
}