package com.example.demoReactApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.example.demoReactApp")
public class DemoReactAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoReactAppApplication.class, args);
	}
}
