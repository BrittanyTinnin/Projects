package com.brittcode.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brittcode.model.User;
import com.brittcode.repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	
	public User searchById(int id) {
		return userRepository.findById(id);
	}
	
	public void createUser(User user) {
		userRepository.save(user);
	}
	
	public List<User> findUsers(){
		return userRepository.findAll();
	}
}
