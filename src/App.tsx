import './App.css';
import Hand from './Components/hand';
import shuffle from './Util/shuffle';
import { Deck, DECK, Card } from './Constant/deck';
import { useEffect, useState } from 'react';


type Player = "Human" | "Computer"

function App() {
  const [playerCards, setPlayerCards] = useState<Deck>([]);
  const [computerCards, setComputerCards] = useState<Deck>([])
  const [deck, setDeck] = useState(shuffle(DECK));
  const [winner, setWinner] = useState("")

  const drawCard = (player: Player) => {
    const card = deck.pop();
    const newDeck = [...deck];
    setDeck(newDeck);
    if (card) {
      giveCard(player, card)
    }
  }

  const giveCard = (player: Player, card: Card) => {
    if (player === "Human") {
      setPlayerCards((current) => [...current, card]
      )
    } else if (player === 'Computer') {
      setComputerCards((current) => [...current, card])
    }
  }

  

  const initGame = () => {
    setComputerCards([]);
    setPlayerCards([]);
    drawCard("Computer");
    drawCard("Human");
    drawCard("Computer");
    drawCard("Human");
  }

  const hit = () => {
    drawCard('Human');
  }

  const stand = () => {
    drawCard('Computer');
  }

  const compareScore = () => {
    let playerCardsScore = 0;
    playerCards.forEach((card) => {
        playerCardsScore += card.value;
    })
    let computerCardsScore = 0;
    computerCards.forEach((card) => {
        computerCardsScore += card.value;
    })

   if(playerCardsScore === 21){
    setWinner("Blackjack! Player Wins");
   }else if(computerCardsScore === 21){
    setWinner("Blackjack! Computer Wins")
   }else if(playerCardsScore < 21 && computerCardsScore < 21){
    setWinner("Play your next move")
   }else if(playerCardsScore>21){
    setWinner("Computer Wins")
   }else if(computerCardsScore>21){
    setWinner("Player Wins")
   }
}

  useEffect(() => {
    initGame()
  }, []);
  useEffect(() => { 
    compareScore();
  }, [playerCards,computerCards])

  return (
    <div className="App">
      <Hand playerName='Computer' cards={computerCards} ></Hand>
      <Hand playerName='Human' cards={playerCards} ></Hand>
      <h2>{winner}</h2>
      <div className="btns">
        <button onClick={initGame}>New Game</button>
        <button onClick={stand}>Stand</button>
        <button onClick={hit}>Hit</button>
      </div>
    </div>
  );
}

export default App;
