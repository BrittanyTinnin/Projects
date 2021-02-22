package com.brittcodes.todosapi.todosrestfulwebservice.todo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "brittcodes", "Learn JavaScript", LocalDateTime.now(), false));
		todos.add(new Todo(++idCounter, "brittcodes", "Learn Java", LocalDateTime.now(), false));
		todos.add(new Todo(++idCounter, "brittcodes", "Learn React", LocalDateTime.now(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);

		if (todo == null)
			return null;

		if (todos.remove(todo)) {
			return todo;
		}

		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}

		return null;
	}
}
