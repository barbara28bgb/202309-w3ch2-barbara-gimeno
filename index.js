const suits = ["♠️", "♥️", "♦️", "♣️"];
const cardsValue = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const getDeck = () => {
  const deck = [];

  suits.forEach((suit) => {
    cardsValue.forEach((cardsValue, position) => {
      deck.push({
        suit: suit,
        cardsValue: cardsValue,
        value: position,
      });
    });
  });
  return deck;
};

const getRandomCard = () => {
  Math.floor(Math.random(getDeck));
  return getRandomCard();
};
