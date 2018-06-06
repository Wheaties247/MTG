package com.example.mtgmonolith.repositories;

import com.example.mtgmonolith.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByuserName(String username);
}