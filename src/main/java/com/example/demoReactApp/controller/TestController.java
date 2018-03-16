package com.example.demoReactApp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by user on 3/15/18.
 */
@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/string")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, String> getString() {
        Map<String, String> m = new HashMap<String, String>();
        m.put("name", "Hello");
        m.put("discription", "James May");
        m.put("imageLinc", "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/08/09/08/avatar.jpg");
        return m;

    }

}
