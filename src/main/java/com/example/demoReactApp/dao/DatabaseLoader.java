package com.example.demoReactApp.dao;

import com.example.demoReactApp.employee.Employee;
import com.example.demoReactApp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by user on 3/6/18.
 */

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
    public DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {

        this.repository.save(new Employee("Frodo", "Baggins", "ring bearer", 23));
        this.repository.save(new Employee("Bilbo", "Baggins", "burglar", 33));
        this.repository.save(new Employee("Gandalf", "the Grey", "wizard", 47));
        this.repository.save(new Employee("Samwise", "Gamgee", "gardener", 13));
        this.repository.save(new Employee("Meriadoc", "Brandybuck", "pony rider", 19));
        this.repository.save(new Employee("Peregrin", "Took", "pipe smoker", 59));
    }
}