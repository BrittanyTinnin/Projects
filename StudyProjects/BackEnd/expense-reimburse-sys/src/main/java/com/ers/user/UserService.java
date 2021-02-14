package com.ers.user;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ers.email.EmailValidator;
import com.ers.login.Login;

@Service
public class UserService {

	private UserRepository userRepository;
	private EmailValidator emailValidator;

	public UserService(UserRepository userRepository, EmailValidator emailValidator) {
		super();
		this.userRepository = userRepository;
		this.emailValidator = emailValidator;
	}

	public void register(User user) {

		boolean isValidEmail = emailValidator.test(user.getEmail());
		boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();

		if (!isValidEmail) {
			throw new IllegalStateException("email not valid");
		}

		if (userExists) {
			throw new IllegalStateException("email already taken");
		}

		user.setPassword(user.getPassword());

		userRepository.save(user);

	}

	public User login(Login loginCredentials) {
		User user = null;
		boolean isValidEmail = emailValidator.test(loginCredentials.getEmail());

		if (!isValidEmail) {
			throw new IllegalStateException("email not valid");
		}

		for (int i = 0; i < userRepository.findAll().size(); i++) {
			User currentUser = userRepository.findAll().get(i);

			if (currentUser.getEmail().equals(loginCredentials.getEmail())) {
				if (currentUser.getPassword().equals(loginCredentials.getPassword())) {
					user = currentUser;
					break;
				}
			}

		}

		return user;
	}

	
	public List<User> viewUsers(){
		return userRepository.findAll();
	}
}
