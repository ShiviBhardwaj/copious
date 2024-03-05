package com.copious.authservice.dto;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.internal.matchers.apachecommons.ReflectionEquals;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserTest {
    @Test
    public void serializationUserTest() {

        User user = new User();
        user.setEmail("someEmail");
        user.setFirstname("someFirstname");
        user.setLastname("someLastname");
        user.setPassword("somePassword");
        user.setDateOfBirth(LocalDate.of(1979, 10, 3));

        Map<String, String> attributes = new HashMap<>();
        attributes.put("PAN", "somePAN");
        user.setAttributes(attributes);

        ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
        try {

            String serializedUser = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(user);
            User actualUser = objectMapper.readerFor(User.class).readValue(serializedUser);
            assertTrue(new ReflectionEquals(user).matches(actualUser));

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    public void serializeUserJsonTest(){
        String userJson = "{\n" +
                "  \"email\" : \"someEmail\",\n" +
                "  \"firstname\" : \"someFirstname\",\n" +
                "  \"lastname\" : \"someLastname\",\n" +
                "  \"dateOfBirth\" : \"1979-10-03\",\n" +
                "  \"password\" : \"somePassword\",\n" +
                "  \"PAN\" : \"somePAN\"\n" +
                "}";

        ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());;
        try {

            User user = objectMapper.readerFor(User.class).readValue(userJson);
            String actualUserJson = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(user);
            Assert.assertTrue(actualUserJson.contains("  \"dateOfBirth\" : \"1979-10-03\",\n"));

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    public void serializeUserJsonTestWithNamedMap() {

        String userJson = "{\n" +
                "  \"email\" : \"someEmail\",\n" +
                "  \"firstname\" : \"someFirstname\",\n" +
                "  \"lastname\" : \"someLastname\",\n" +
                "  \"dateOfBirth\" : \"1979-10-03\",\n" +
                "  \"password\" : \"somePassword\",\n" +
                "  \"attributes\" : {\n" +
                "    \"PAN\" : \"somePAN\"\n" +
                "  }\n" +
                "}";

        ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
        try {

            User user = objectMapper.readerFor(User.class).readValue(userJson);
            String actualUserJson = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(user);
            Assert.assertFalse(actualUserJson.contains("  \"attributes\" : {\n"));

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}