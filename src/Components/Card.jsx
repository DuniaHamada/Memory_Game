import React, { useState } from "react";
import BackDesign from "../../public/Rectangle 2.svg";
const Card = ({ card, isFlipped, isMatched, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <div
      className={`w-28 h-28 flex items-center justify-center text-3xl shadow-sm cursor-pointer transition-transform transform duration-200 ease-in-out ${
        isFlipped || isMatched || isClicked ? "scale-105" : "hover:scale-105"
      }`}
      onClick={handleCardClick}
      style={{
        backgroundColor: isFlipped || isMatched ? "transparent" : "#F18B8B",
        borderRadius: "50%",
      }}
    >
      {isFlipped || isMatched ? (
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <img
          src={BackDesign}
          alt="Back Design"
          className="w-full h-full object-cover"
          style={{ borderRadius: "50%" }}
        />
      )}
    </div>
  );
};

export default Card;
