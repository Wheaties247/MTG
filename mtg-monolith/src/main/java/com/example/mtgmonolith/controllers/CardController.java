package com.example.mtgmonolith.controllers;

import com.example.mtgmonolith.models.Card;
import com.example.mtgmonolith.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class CardController {

    @Autowired
    private CardRepository cardRepository;
    @GetMapping("/cards")
    public Iterable <Card> findAllCards(){
        return cardRepository.findAll();
    }
    //this route will create a new card for a user
    @PostMapping("/cards")
    public Card createNewCard(@RequestBody Card newCard){
        System.out.println("POST TO CARD HIT");
         return  cardRepository.save(newCard);
    }
    @DeleteMapping("/cards/{cardId}")
    public HttpStatus deleteCardById(@PathVariable Long cardId) {
        cardRepository.deleteById(cardId);
        return HttpStatus.OK;
    }
    @PatchMapping("/cards/{cardId}")
    public Card updateCardById(@PathVariable Long cardId, @RequestBody Card cardRequest) {

        Card cardFromDb = cardRepository.findById(cardId).get();

        cardFromDb.setCardId(cardRequest.getCardId());
        cardFromDb.setDeckId(cardRequest.getDeckId());
        cardFromDb.setUserId(cardRequest.getUserId());

        return cardRepository.save(cardFromDb);
    }
}
