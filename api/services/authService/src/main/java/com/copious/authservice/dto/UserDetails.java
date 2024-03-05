package com.copious.authservice.dto;

import com.copious.authservice.enums.DigitalLocationType;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class UserDetails {
    private List<DigitalLocationType> digitalLocations;
    private List<PhysicalLocation> physicalLocations;
}
