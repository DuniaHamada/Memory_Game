import React from "react";

const Header = ({ restartGame, moves, misses, score, time }) => {
  return (
    <div>
      <div className="flex flex-col items-center mt-8 space-y-4">
        <div className="text-6xl font-normal text-[#F18B8B]">Memória</div>
        <div className="flex space-x-4 items-center">
          <button
            onClick={restartGame}
            className="bg-[#D4A4A4] text-[#7A4B4B] font-semibold py-2 px-6 rounded-full"
          >
            Reiniciar
          </button>
          <div className="bg-[#E7D4D4] text-[#7A4B4B] font-semibold py-2 px-6 rounded-full flex items-center space-x-2">
            <span>Tempo:</span>
            <span>{time}s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
