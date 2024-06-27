package com.copious.authservice.web;

import jakarta.inject.Inject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@ActiveProfiles("local")
@AutoConfigureMockMvc
public class UserControllerNFTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void ConcurrentRequestsSignUpTest(){
        
    }
}
