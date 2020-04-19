package com.billTracker.demo.repository;

import org.springframework.data.repository.CrudRepository;
import com.billTracker.demo.model.User;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long>{
    User findByEmail(final String email);
}
