package com.rgd.rgd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rgd.rgd.models.Registrator;

public interface DetailRepository extends JpaRepository<Registrator, Long> {
    void deleteByDecNumber(String decNumber);
    Registrator findByDecNumber(String decNumber);
}
