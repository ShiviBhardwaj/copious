package com.copious.authservice.dto;

import com.fasterxml.jackson.annotation.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@ToString
public class User {
    private String email;
    private String firstname;
    private String lastname;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
    private String password;
    private UserDetails userDetails;

    private Map<String, String> attributes = new HashMap<>();

    @JsonAnyGetter
    public Map<String, String> getAttributes() {
        return attributes;
    }

    @JsonAnySetter
    public void setAttributes(String key, String value) {
        attributes.put(key, value);
    }
}
