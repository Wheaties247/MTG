package com.example.mtgmonolith.repositories;

import com.example.mtgmonolith.models.Card;
import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Long> {
}