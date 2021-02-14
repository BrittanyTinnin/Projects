package com.springsecurity.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springsecurity.model.Student;

@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
	
	private static final List<Student> STUDENTS = Arrays.asList(
			new Student(1, "James Baldwin"),
			new Student(2, "Maya Angelou"),
			new Student(3, "Endubis")
			);
	
	@GetMapping("/home")
	public String home() {
		return "Honey, I'm home.";
	}

	@GetMapping("{studentId}")
	public Student getStudent(@PathVariable("studentId")Integer studentId) {
		return STUDENTS.stream()
				.filter(student -> studentId.equals(student.getStudentId()))
				.findFirst()
				.orElseThrow(() -> new IllegalStateException("Student " + studentId + " does not exist."));
	}
}
