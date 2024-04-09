package com.rgd.rgd.services;

import com.rgd.rgd.models.Registrator;
import java.util.*;

public interface DetailService {
    List<Registrator> findAllDetails();
    Registrator saveDetail(Registrator detailClass);
    Registrator findByDec_number(String dec_number);
    Registrator updateDetail(Registrator detailClass);
    void deleteDec_number(String dec_number);
}