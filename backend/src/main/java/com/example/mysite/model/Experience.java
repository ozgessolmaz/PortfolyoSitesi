package com.example.mysite.model;

import java.time.LocalDate;
import java.util.List;

public record Experience(
        String id,
        String company,
        String role,
        LocalDate startDate,
        LocalDate endDate,
        List<String> achievements,
        String location
) {}
