package com.example.mtgmonolith;

import io.magicthegathering.javasdk.api.CardAPI;
import io.magicthegathering.javasdk.resource.Card;

public class Cards {

    int multiverseId = 1;

    public void test() {
        Card card = CardAPI.getCard(this.multiverseId);
        System.out.println( card);
    }
}
