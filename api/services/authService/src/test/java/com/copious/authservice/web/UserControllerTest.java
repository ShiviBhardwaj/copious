package com.copious.authservice.web;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(profiles = {"local"})
public class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void signUpTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("http://localhost:8080/signup"))
                .andExpect(status().isOk());
    }
}