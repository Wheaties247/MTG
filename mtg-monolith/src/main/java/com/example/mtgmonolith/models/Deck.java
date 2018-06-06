package com.example.mtgmonolith.models;
import javax.persistence.*;

import lombok.*;


    @Data
    @AllArgsConstructor @NoArgsConstructor @Getter @Setter
    @Entity @Table(name = "DECKS")
    public class Deck {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "DECK_NAME")
        private String deckName;
    }
