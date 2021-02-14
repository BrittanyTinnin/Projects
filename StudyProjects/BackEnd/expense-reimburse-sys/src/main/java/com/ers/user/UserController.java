package com.ers.user;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ers.login.Login;
import com.ers.reimbursement.Reimbursement;
import com.ers.reimbursement.ReimbursementService;

@RestController
@RequestMapping("api/v1/ers")
public class UserController {

	private UserService userService;
	private ReimbursementService reimbService;

	public UserController(UserService userService, ReimbursementService reimbService) {
		super();
		this.userService = userService;
		this.reimbService = reimbService;
	}

	@GetMapping("home")
	public String home() {
		return "Honey, I'm home";
	}

	// registration
	@PostMapping("registration")
	public String registration(@RequestBody User user) {

		System.out.println("userService: " + userService);

		userService.register(user);

		return "registration successfull";
	}

	// login

	@PostMapping("login")
	public User loginDetails(@RequestBody Login loginCred) {

		return userService.login(loginCred);

	}
	
	// view users
	@GetMapping("users")
	public List<User> allUsers(){
		return userService.viewUsers();
	}
	

	// user adds reimbursement
	@PostMapping("{userId}/new-reimbursement")
	public void addReimbursement(@PathVariable("userId") Integer userId, @RequestBody Reimbursement reimbursement) {
		reimbService.saveReimbursement(reimbursement);
	}

	public List<Reimbursement> authorReimbursements(@RequestBody Reimbursement reimb) {

		return null;

	}

}
