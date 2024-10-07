import { Deck } from "../Constant/deck"
import { klona } from 'klona/json';

function shuffle(deck : Deck): Deck {
    const shuffledDeck = klona(deck);
    return shuffledDeck;
}

export default shuffle;