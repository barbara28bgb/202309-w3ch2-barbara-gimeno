let cardVisible;
let cardHidden;

const cardSuits = ["♠️", "♥️", "♦️", "♣️"];
const cardValues = [
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

  cardSuits.forEach((cardSuit) => {
    cardValues.forEach((cardValue, cardValuePosition) => {
      deck.push({
        suit: cardSuit,
        cardsValue: cardValue,
        value: cardValuePosition,
      });
    });
  });

  return deck;
};

const getRandomCard = () => {
  cardVisible = getDeck()[Math.floor(Math.random() * getDeck().length)];
  cardHidden = getDeck()[Math.floor(Math.random() * getDeck().length)];
};
getRandomCard();
console.log(cardHidden, cardVisible);
