package com.rgd.rgd.configuration;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.net.URI;
import java.net.URISyntaxException;

@Configuration
public class DataConfig {

    @Bean
    public DataSource dataSource() throws URISyntaxException {
        String DBURL = System.getenv("SPRING_DATASOURCE_URL");
        String NOSSL = System.getenv("DATABASE_NO_SSL");
        if (DBURL != null && DBURL.length() > 0) {
            URI dbUri = new URI(DBURL);
            String username = dbUri.getUserInfo().split(":")[0];
            String password = dbUri.getUserInfo().split(":")[1];
            String jdbcUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath()
                    + ("true".equals(NOSSL) ? "" : "?sslmode=require");
            System.err.println("*** DataConfig: jdbc:postgresql://_");
            DataSourceBuilder basicDataSource = DataSourceBuilder.create();
            basicDataSource.driverClassName("org.postgresql.Driver");
            basicDataSource.url(jdbcUrl);
            basicDataSource.username(username);
            basicDataSource.password(password);
            return basicDataSource.build();
        } else { // useful for in-memory test
            DataSourceBuilder basicDataSource = DataSourceBuilder.create();
            basicDataSource.driverClassName("org.h2.Driver");
            String jdbcUrl = "jdbc:h2:mem:test";
            System.err.println("*** DataConfig: jdbc:h2:_");
            basicDataSource.url(jdbcUrl);
            basicDataSource.username("TODO");
            basicDataSource.password("");
            return basicDataSource.build();
        }
    }
}
