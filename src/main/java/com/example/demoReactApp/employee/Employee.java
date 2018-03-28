package com.example.demoReactApp.employee;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;


import javax.persistence.*;

/**
 * Created by user on 3/6/18.
 *//*
@Data
@Entity
public class Employee {

    private @Id
    @GeneratedValue
    Long id;
    private String firstName;
    private String lastName;
    private String description;
    private int age;

    private @Version
    @JsonIgnore
    Long version;


    private Employee() {}

    public Employee(String firstName, String lastName, String description, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.age = age;
    }
}
*/