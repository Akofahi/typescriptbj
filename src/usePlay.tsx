import { useEffect,useState } from "react";
import shuffle from "./Util/shuffle";
import { Card, DECK, Deck } from "./Constant/deck";
import { Player } from "./App";

const usePlay = ()=>{
    const [playerCards, setPlayerCards] = useState<Deck>([]);
    const [computerCards, setComputerCards] = useState<Deck>([]);
    const [deck, setDeck] = useState(shuffle(DECK));
    const [winner, setWinner] = useState("");

    const drawCard = (player: Player) => {
        const card = deck.pop();
        const newDeck = [...deck];
        setDeck(newDeck);
        if (card) {
          giveCard(player, card);
        }
      };

      const giveCard = (player: Player, card: Card) => {
        if (player === "Human") {
          setPlayerCards((current) => [...current, card]);
        } else if (player === "Computer") {
          setComputerCards((current) => [...current, card]);
        }
      };

      const initGame = () => {
        setComputerCards([]);
        setPlayerCards([]);
        drawCard("Computer");
        drawCard("Human");
        drawCard("Computer");
        drawCard("Human");
      };

      const hit = () => {
        drawCard("Human");
      };
    
      const stand = () => {
        drawCard("Computer");
      };

      const compareScore = () => {
        let playerCardsScore = 0;
        playerCards.forEach((card) => {
          playerCardsScore += card.value;
        });
        let computerCardsScore = 0;
        computerCards.forEach((card) => {
          computerCardsScore += card.value;
        });
    
        if (playerCardsScore === 21) {
          setWinner("Blackjack! Player Wins");
        } else if (computerCardsScore === 21) {
          setWinner("Blackjack! Computer Wins");
        } else if (playerCardsScore < 21 && computerCardsScore < 21) {
          setWinner("Play your next move");
        } else if (playerCardsScore > 21) {
          setWinner("Computer Wins");
        } else if (computerCardsScore > 21) {
          setWinner("Player Wins");
        }
      };


  
      useEffect(() => {
        compareScore();
      }, [playerCards, computerCards]);
    
  return {initGame,hit,stand,playerCards,computerCards,deck,winner}
}

export default usePlay;