package com.rgd.rgd.services.impl;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.rgd.rgd.models.Registrator;
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
    public List<Registrator> findAllDetails() {
        return repository.findAll();
    }

    @Override
    public Registrator saveDetail(Registrator detailClass) {
        return repository.save(detailClass);
    }

    @Override
    public Registrator findByDecNumber(String decNumber) {
        return repository.findByDecNumber(decNumber);
    }

    @Override
    public Registrator updateDetail(Registrator detailClass) {
        return repository.save(detailClass);
    }

    @Override
    @Transactional
    public void deleteDecNumber(String decNumber) {
        repository.deleteByDecNumber(decNumber);
    }
}
