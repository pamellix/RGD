package com.rgd.rgd.models;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class Application {
    private int id;
    private String name;
    private String author;
    private String version;
}