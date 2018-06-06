package com.example.mtgmonolith.models;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "CARDS")

public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CARD_ID")
    private String cardId;

    @Column(name = "DECK_ID")
    private String deckId;

    @Column(name = "USER_ID")
    private Integer userId;

}
