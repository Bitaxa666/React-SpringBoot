package com.example.demoReactApp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.*;

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

    @GetMapping("/string/ss")
    @ResponseStatus(HttpStatus.OK)
    public ArrayList<Map<String, String>> getPerson(){
        ArrayList<Map<String, String>> p = new ArrayList<>();
        Map<String, String> m = new HashMap<String, String>();
        m.put("name", "Hello");
        m.put("discription", "James May");
        m.put("imageLinc", "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/08/09/08/avatar.jpg");
        p.add(m);

        Map<String, String> n = new HashMap<String, String>();
        n.put("name", "World");
        n.put("discription", "This is long story May");
        n.put("imageLinc", "http://picfun.ru/wp-content/uploads/HTxyUcwXfw.jpg");
        p.add(n);

        Map<String, String> o = new HashMap<String, String>();
        o.put("name", "Mistery");
        o.put("discription", "This is long story Mistery");
        o.put("imageLinc", "https://avatars.mds.yandex.net/get-pdb/51720/5282bb46-95e3-422e-9cea-db629fa0599b/s1200");
        p.add(o);

        return p;
    }

    class Person implements Serializable {
        String name;
        String discription;
        String imageLinc;

        public Person(String name, String discription, String imageLinc) {
            this.name = name;
            this.discription = discription;
            this.imageLinc = imageLinc;
        }
    }

}
