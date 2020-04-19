package com.billTracker.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // This means that this class is a Controller
@CrossOrigin(origins={ "http://localhost:3000"})
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class BasicAuthenticationController {
        @GetMapping(path="/basicauth")
        public AuthenticationBean helloWorldBean() {
            System.out.println("here");
            //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
            return new AuthenticationBean("You are authenticated");
        }
}
