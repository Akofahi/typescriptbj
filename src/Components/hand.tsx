import { Card } from "../Constant/deck";
type Props = {
  playerName: string;
  cards: Card[];
};

function Hand({ cards, playerName }: Props) {
  const cardsName = cards.map((card) => {
    return <li key={card.name}>{card.name}</li>;
  });
  const cardsImage = cards.map((card) => {
    return <img src={"/images/" + card.pic} key={card.pic} />;
  });
  let score: number = 0;
  cards.forEach((card) => {
    score += card.value;
  });

  return (
    <div className="deck">
      <div className="textList">
        <h3>{playerName}</h3>
        <div className="list">
          <ul>{cardsName}</ul>
        </div>
        <p>{score}</p>
      </div>
      <div className="images">{cardsImage}</div>
    </div>
  );
}
export default Hand;
