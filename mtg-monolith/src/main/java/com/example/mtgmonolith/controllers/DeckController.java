package com.example.mtgmonolith.controllers;

import com.example.mtgmonolith.models.Deck;
import com.example.mtgmonolith.repositories.DeckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class DeckController {

    @Autowired
    private DeckRepository deckRepository;
    @GetMapping("/decks")
    public Iterable<Deck> findAllDecks(){
        return deckRepository.findAll();
    }
    @PostMapping("/decks")
    public Deck createNewDeck(@RequestBody Deck newDeck){
        System.out.println("POST TO Deck HIT");
        return  deckRepository.save(newDeck);
    }
    @DeleteMapping("/decks/{deckId}")
    public HttpStatus deleteDeckById(@PathVariable Long deckId) {
        deckRepository.deleteById(deckId);
        return HttpStatus.OK;
    }
    @PatchMapping("/decks/deckId")
    public Deck updateDeckById(@PathVariable Long deckId, @RequestBody Deck deckRequest){
        Deck deckFromDb = deckRepository.findById(deckId).get();
            deckFromDb.setDeckName(deckRequest.getDeckName());

            return deckRepository.save(deckFromDb);
    }
}
