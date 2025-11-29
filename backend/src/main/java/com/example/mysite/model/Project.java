package com.example.mysite.model;

import java.util.List;

public record Project(
        String id,
        String name,
        String description,
        List<String> technologies,
        String liveUrl,
        String sourceUrl
) {}
