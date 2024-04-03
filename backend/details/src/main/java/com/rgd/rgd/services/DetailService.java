package com.rgd.rgd.services;

import com.rgd.rgd.models.DetailClass;
import java.util.*;

public interface DetailService {
    List<DetailClass> findAllDetails();
    DetailClass saveDetail(DetailClass detailClass);
    DetailClass findByDetail(String detail);
    DetailClass updateDetail(DetailClass detailClass);
    void deleteDetail(String detail);
}