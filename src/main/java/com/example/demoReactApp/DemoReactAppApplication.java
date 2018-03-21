package com.example.demoReactApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.example.demoReactApp")
@EntityScan("com.example.demoReactApp.employee")
public class DemoReactAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoReactAppApplication.class, args);
	}
}
