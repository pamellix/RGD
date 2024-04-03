package com.rgd.rgd.services.impl;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.rgd.rgd.models.UserClass;
import com.rgd.rgd.repository.UserRepository;
import com.rgd.rgd.services.UserService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
@Primary
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Override
    public List<UserClass> findAllUsers() {
        return repository.findAll();
    }

    @Override
    public UserClass saveUser(UserClass user) {
        return repository.save(user);
    }

    @Override
    public UserClass findByLogin(String login) {
        return repository.findByLogin(login);
    }

    @Override
    public UserClass updateUser(UserClass user) {
        return repository.save(user);
    }

    @Override
    public void deleteUser(String login) {
        repository.deleteByLogin(login);
    }    
}
