package com.rgd.rgd.services;

import com.rgd.rgd.models.Registrator;
import java.util.*;

public interface DetailService {
    List<Registrator> findAllDetails();
    Registrator saveDetail(Registrator detailClass);
    Registrator findByDecNumber(String decNumber);
    Registrator updateDetail(Registrator detailClass);
    void deleteDecNumber(String decNumber);
}