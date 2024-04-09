package com.rgd.rgd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rgd.rgd.models.Registrator;

public interface DetailRepository extends JpaRepository<Registrator, Long> {
    void deleteByDecNumber(String dec_number);
    Registrator findByDecNumber(String dec_number);
}
