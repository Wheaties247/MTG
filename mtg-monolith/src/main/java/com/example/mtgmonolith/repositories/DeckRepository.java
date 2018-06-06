package com.example.mtgmonolith.repositories;

import com.example.mtgmonolith.models.Deck;
import org.springframework.data.repository.CrudRepository;

public interface DeckRepository extends CrudRepository<Deck, Long> {
}