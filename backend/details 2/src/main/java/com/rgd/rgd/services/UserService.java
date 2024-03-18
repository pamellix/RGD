package com.rgd.rgd.services;

import java.util.*;
import com.rgd.rgd.models.UserClass;

public interface UserService {
    List<UserClass> findAllUsers();
    
    UserClass saveUser(UserClass user);
    UserClass findByLogin(String login);
    UserClass updateUser(UserClass user);
    void deleteUser(String login);
}