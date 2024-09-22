import React, { useState, useEffect } from "react";
import GameBoard from "./Components/GameBoard";
import Header from "./Components/Header";
import NotificationBanner from "./Components/NotificationBanner ";
import GameOverModal from "./Components/GameOverModal ";

// Import images
import redImage from "../public/Group 20.svg";
import yellowImage from "../public/Group 21.svg";
import whiteImage from "../public/Group 22.svg";
import blackImage from "../public/Group 24.svg";
import orangeImage from "../public/Group 25.svg";
import blueImage from "../public/Group 27.svg";
import wyrImage from "../public/Group 28.svg";
import wyImage from "../public/Group 32.svg";

const cardsArray = [
  { id: 1, name: "red", image: redImage },
  { id: 2, name: "yellow", image: yellowImage },
  { id: 3, name: "white", image: whiteImage },
  { id: 4, name: "black", image: blackImage },
  { id: 5, name: "orange", image: orangeImage },
  { id: 6, name: "wy", image: wyImage },
  { id: 7, name: "blue", image: blueImage },
  { id: 8, name: "wyr", image: wyrImage },
  { id: 9, name: "red", image: redImage },
  { id: 10, name: "yellow", image: yellowImage },
  { id: 11, name: "white", image: whiteImage },
  { id: 12, name: "black", image: blackImage },
  { id: 13, name: "orange", image: orangeImage },
  { id: 14, name: "blue", image: blueImage },
  { id: 15, name: "wyr", image: wyrImage },
  { id: 16, name: "wy", image: wyImage },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const App = () => {
  const [cards, setCards] = useState(shuffleArray([...cardsArray]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [notification, setNotification] = useState(null);
  const [gameResult, setGameResult] = useState(null); // 'win' or 'lose'
  const [time, setTime] = useState(60);
  const [winningTime, setWinningTime] = useState(null);

  useEffect(() => {
    let timer = null;
    if (time > 0 && !gameResult) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else if (time === 0 && !gameResult) {
      setGameResult("lose"); // Set the game result to "lose" when time runs out
    }

    return () => clearTimeout(timer);
  }, [time, gameResult]);

  const handleFlip = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id)) return;

    setFlippedCards((prev) => [...prev, card]);

    if (flippedCards.length === 1) {
      const firstCard = flippedCards[0];

      if (firstCard.name === card.name) {
        setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
        setScore(score + 1);
        setFlippedCards([]);

        if (score + 1 === cardsArray.length / 2) {
          setGameResult("win");
          setWinningTime(time);
          setNotification(`Vitória! Você completou o jogo em ${time} s!`);
        }
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
        setMisses(misses + 1);
        setMoves(moves + 1);
      }
    }
  };

  const restartGame = () => {
    setCards(shuffleArray([...cardsArray]));
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setScore(0);
    setMisses(0);
    setNotification(null);
    setGameResult(null);
    setTime(60);
    setWinningTime(null);
  };

  return (
    <div className="min-h-screen bg-[#6a5e9508] flex flex-col items-center justify-center text-white font-princess relative">
      {notification && (
        <NotificationBanner
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}

      {gameResult && (
        <GameOverModal
          gameResult={gameResult}
          time={`${winningTime || time}s`}
          moves={moves}
          restartGame={restartGame}
        />
      )}

      <Header
        score={score}
        moves={moves}
        misses={misses}
        restartGame={restartGame}
        time={time}
      />
      <GameBoard
        cards={cards}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        handleFlip={handleFlip}
      />
    </div>
  );
};

export default App;
