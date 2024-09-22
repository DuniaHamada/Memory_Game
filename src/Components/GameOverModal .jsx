import React from "react";
import Confetti from "react-confetti";

const GameOverModal = ({ gameResult, time, moves, restartGame }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-40">
      {gameResult === "win" && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="bg-white rounded-lg p-8 w-80 text-center">
        <h2
          className="text-4xl font-medium text-[#605070]"
          style={{ fontFamily: "'Princess Sofia', cursive" }}
        >
          {gameResult === "win" ? "Vitória" : "Você perdeu"}
        </h2>
        <div className="mt-4 text-[#605070] text-xl">
          <p>Tempo: {time}</p>
          <p>Movimentos: {moves}</p>
        </div>
        <button
          onClick={restartGame}
          className="mt-6 bg-[#605070] text-white font-semibold py-2 px-6 rounded-full"
        >
          Novo
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
