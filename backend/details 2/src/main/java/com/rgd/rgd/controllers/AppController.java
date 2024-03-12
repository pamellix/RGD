package com.rgd.rgd.controllers;

import com.rgd.rgd.services.DetailService;
import com.rgd.rgd.models.DetailClass;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
@RequestMapping("api/v1/details")
@AllArgsConstructor
public class AppController {
    // private AppService appService;
    private final DetailService service;

    @GetMapping("/all-details")
    public List<DetailClass> findAllDetails() {
        return service.findAllDetails();
    }
    
    @PostMapping("/save-detail")
    public DetailClass saveDetail(@RequestBody DetailClass detailClass) {
        return service.saveDetail(detailClass);
    }

    @GetMapping("{detail}")
    public DetailClass findByDetail(@PathVariable String detail) {
        return service.findByDetail(detail);
    }

    @PutMapping("update-detail")
    public DetailClass updateDetail(DetailClass detailClass) {
        return service.updateDetail(detailClass);
    }

    @DeleteMapping("delete-detail/{detail}")
    public void deleteDetail(@PathVariable String detail) {
        service.deleteDetail(detail);
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to unprotected page";
    }

    // @GetMapping("/all-app")
    // @PreAuthorize("hasAuthority('ROLE_USER')")
    // public List<Application> allApplications() {
    //     return appService.allApplications();
    // }


    // @GetMapping("/{id}")
    // @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    // public Application applicationByID(@PathVariable int id) {
    //     return appService.applicationById(id);
    // }

    // @PostMapping("/new-user")
    // public String addUser(@RequestBody MyUser user) {
    //     appService.addUser(user);
    //     return "User is saved";
    // }
}
