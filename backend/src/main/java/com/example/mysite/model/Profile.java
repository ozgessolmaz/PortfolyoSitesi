package com.example.mysite.model;

import java.util.List;

public record Profile(
        String name,
        String title,
        String summary,
        List<SocialLink> socialLinks,
        List<String> highlights,
        String location
) {}
