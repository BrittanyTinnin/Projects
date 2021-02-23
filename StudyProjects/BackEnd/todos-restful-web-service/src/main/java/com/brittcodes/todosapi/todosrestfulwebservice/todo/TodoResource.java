package com.brittcodes.todosapi.todosrestfulwebservice.todo;

import java.net.URI;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
	private final TodoHardcodedService todoService;

	public TodoResource(TodoHardcodedService todoService) {
		super();
		this.todoService = todoService;
	}

	/**************** CREATE ******************/
	/*
	 * TODO Create a new Todo POST /users/{user_name}/todos/
	 */
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Todo> save(@PathVariable("username") String username, @RequestBody Todo todo) {
		Todo createdTodo = todoService.save(todo);

		// Location
		// Get current resource url
		// append id

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

	/***************** READ *******************/

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable("username") String username) {
		return todoService.findAll();
	}

	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable("username") String username, @PathVariable("id") long id) {
		return todoService.findById(id);
	}

	/******************** UPDATE ********************/
	/*
	 * TODO Edit/Update a Todo PUT /users/{user_name}/todos/{todo_id}
	 */
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("username") String username, @PathVariable("id") long id,
			@RequestBody Todo todo) {
		Todo updatedTodo = todoService.save(todo);
		return new ResponseEntity<>(todo, HttpStatus.OK);
	}

	/******************** DELETE ********************/

	/*
	 * Delete a Todo of a User DELETE /users/{username}/todos/{todo_id}
	 */
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable("username") String username, @PathVariable("id") long id) {

		Todo todo = todoService.deleteById(id);

		if (todo != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();

	}

}
