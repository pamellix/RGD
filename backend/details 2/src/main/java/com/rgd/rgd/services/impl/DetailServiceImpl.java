package com.rgd.rgd.services.impl;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.rgd.rgd.models.DetailClass;
import com.rgd.rgd.repository.DetailRepository;
import com.rgd.rgd.services.DetailService;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
@Primary
public class DetailServiceImpl implements DetailService {
    
    private final DetailRepository repository;
    
    @Override
    public List<DetailClass> findAllDetails() {
        return repository.findAll();
    }

    @Override
    public DetailClass saveDetail(DetailClass detailClass) {
        return repository.save(detailClass);
    }

    @Override
    public DetailClass findByDetail(String detail) {
        return repository.findByDetail(detail);
    }

    @Override
    public DetailClass updateDetail(DetailClass detailClass) {
        return repository.save(detailClass);
    }

    @Override
    @Transactional
    public void deleteDetail(String detail) {
        repository.deleteByDetail(detail);
    }
}