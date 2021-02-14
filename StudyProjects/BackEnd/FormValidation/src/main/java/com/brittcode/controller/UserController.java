package com.brittcode.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.brittcode.model.User;
import com.brittcode.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

	private UserService userService;

	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
//	@GetMapping("/")
//	public String home() {
//		return "Welcome home!";
//	}
//	
	@PostMapping("/user/new")
	public void registerUser(@RequestBody User user) {
		userService.createUser(user);
	}
	
	@GetMapping("/user/{id}")
	public User retrieveById(@PathVariable int id) {
		return userService.searchById(id);
	}
	
	@GetMapping("/users")
	public List<User> retrieveAllUsers() {
		return userService.findUsers();
	}
	
}
