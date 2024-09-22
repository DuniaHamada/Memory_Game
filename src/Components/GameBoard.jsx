import React from "react";
import Card from "./Card";

const GameBoard = ({ cards, flippedCards, matchedCards, handleFlip }) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-max mx-auto mt-4 place-items-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          isFlipped={flippedCards.some((c) => c.id === card.id)}
          isMatched={matchedCards.includes(card.id)}
          onClick={() => handleFlip(card)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
