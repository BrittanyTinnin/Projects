package com.brittcodes.todosapi.todosrestfulwebservice.todo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
	private final TodoHardcodedService todoService;

	public TodoResource(TodoHardcodedService todoService) {
		super();
		this.todoService = todoService;
	}

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(String username) {
		return todoService.findAll();
	}

	/*
	 * Delete a Todo of a User DELETE /users/{username}/todos/{todo_id}
	 */

	/*
	 * Edit/Update a Todo PUT /users/{user_name}/todos/{todo_id}
	 */

	/*
	 * Create a new Todo POST /users/{user_name}/todos/
	 */
}
