package com.springsecurity.model;

public class Student {

	/*
	 * Blank final 
	 * 	- a blank final variable in Java is a final variable that is not initialized during declaration
	 * 	- values must be assigned in constructor
	 *  - final variable will hold a reference to an object, then the state of the object can be change by operations on the object
	 *  	but the variable will always refer to the same object aka non-transitivity
	 */
	
	private final Integer studentId;
	private final String studentName;

	public Student(Integer studentId, String studentName) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public String getStudentName() {
		return studentName;
	}

}
