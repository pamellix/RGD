package com.rgd.rgd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rgd.rgd.models.DetailClass;

public interface DetailRepository extends JpaRepository<DetailClass, Long> {
    void deleteByDetail(String detail);
    DetailClass findByDetail(String detail);
}