package com.chandresh.sapient.weatherapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class WeatherController {

	@GetMapping("/init")
	public String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		String template = "Hello, %s!";
		return String.format(template, name);
	}
}