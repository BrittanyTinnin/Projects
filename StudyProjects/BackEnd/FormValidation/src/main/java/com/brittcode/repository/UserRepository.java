package com.brittcode.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brittcode.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	User findById(int id);
	User save(User user);
	List<User> findAll();
}
