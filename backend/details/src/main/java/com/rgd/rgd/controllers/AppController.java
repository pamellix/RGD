package com.rgd.rgd.controllers;

import com.rgd.rgd.services.DetailService;
import com.rgd.rgd.services.UserService;
import com.rgd.rgd.models.DetailClass;
import com.rgd.rgd.models.UserClass;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/details", produces="application/json")
@AllArgsConstructor
public class AppController {

    private final DetailService detailService;

    private final UserService userService;

    @GetMapping("/all-details")
    public List<DetailClass> findAllDetails() {
        return detailService.findAllDetails();
    }
    
    @GetMapping("/all-users")
    public List<UserClass> findAllUsers() {
        return userService.findAllUsers();
    }
    
    @PostMapping("/save-detail")
    public DetailClass saveDetail(@RequestBody DetailClass detailClass) {
        return detailService.saveDetail(detailClass);
    }

    @PostMapping("/save-user")
    public UserClass saveUser(@RequestBody UserClass user) {
        return userService.saveUser(user);
    }

    @GetMapping("/detail/{detail}")
    public DetailClass findByDetail(@PathVariable String detail) {
        return detailService.findByDetail(detail);
    }

    @GetMapping("/user/{login}")
    public UserClass findByLogin(@PathVariable String login) {
        return userService.findByLogin(login);
    }

    @PutMapping("update-detail")
    public DetailClass updateDetail(DetailClass detailClass) {
        return detailService.updateDetail(detailClass);
    }

    @PutMapping("update-user")
    public UserClass updateUser(UserClass user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("delete-detail/{detail}")
    public void deleteDetail(@PathVariable String detail) {
        detailService.deleteDetail(detail);
    }

    @DeleteMapping("delete-user/{login}")
    public void deleteUser(@PathVariable String login) {
        userService.deleteUser(login);
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to unprotected page";
    }
}