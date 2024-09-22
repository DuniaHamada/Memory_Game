import React from "react";

const NotificationBanner = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#F18B8B] text-white text-xl py-3 flex justify-center items-center z-50">
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 bg-white text-[#F18B8B] font-semibold py-1 px-3 rounded-full"
      >
        Fechar
      </button>
    </div>
  );
};

export default NotificationBanner;
