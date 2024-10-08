import { Deck } from "../Constant/deck"
import { klona } from 'klona/json';

function shuffle(deck : Deck): Deck {
    const shuffledDeck = klona(deck);
    let currentIndex = shuffledDeck.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [shuffledDeck[currentIndex], shuffledDeck[randomIndex]] = [shuffledDeck[randomIndex], shuffledDeck[currentIndex]]
    }
    return shuffledDeck
}

export default shuffle;