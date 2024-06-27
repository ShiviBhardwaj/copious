package com.copious.authservice.web;

import com.copious.authservice.dto.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @PostMapping("/signup")
    public User create(User user){

            stub();

        return null;
    }

    public String stub(){
        return null;
    }
}
