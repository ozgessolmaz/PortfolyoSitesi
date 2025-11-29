package com.example.mysite.model;

public record Skill(
        String category,
        String name,
        int proficiency // percentage 0-100
) {}
