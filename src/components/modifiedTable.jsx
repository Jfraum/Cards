import React, { useState } from "react";

export default function Table() {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState("");

  const handleInputChange = (e) => {
    setNewCard(e.target.value);
  };

  const handleAddCard = () => {
    if (newCard.trim() !== "") {
      setCards([...cards, newCard.trim()]);
      setNewCard("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCard();
    }
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <>
    <div className="flex justify-between">
    <div className="flex flex-row pl-10 justify-start items-center">
      <div className="mt-20 flex flex-col items-center space-y-10 shadow-md mr-4 w-[500px] h-[500px]">
        <h2 className="">adding new card</h2>
        <input
          type="text"
          value={newCard}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Ingresa el nombre de la tarjeta"
        />
      </div>
      </div>
    <div className="mt-20 flex flex-col items-center space-y-10 shadow-md mr-4 w-[500px] h-[500px]">
      <h2>Lista de Tarjetas</h2>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[320px] h-[310px] shadow-2xl bg-gray-400 rounded-2xl flex justify-center items-center m-4 relative"
          >
            <span className="font-bold text-6xl font-Roboto text-white">
              {card}
            </span>
            <button
              onClick={() => handleDeleteCard(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute top-2 right-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      </div>
      </div>
    </>
  );
}

