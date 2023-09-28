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

const getRandomCard = () =>
  getDeck()[Math.floor(Math.random() * getDeck().length)];

const getVisualRandomSuitLeft = document.querySelector(
  ".visual-card-suit-top-left"
);

const getVisualRandomValue = document.querySelector(
  ".visual-card-value-center"
);

const getVisualRandomSuitRight = document.querySelector(
  ".visual-card-suit-bottom-right"
);
const getHiddenRandomSuitLeft = document.querySelector(
  ".hidden-card-suit-top-left"
);
const getHiddenRandomValue = document.querySelector(
  ".hidden-card-value-center"
);
const getHiddenRandomSuitRight = document.querySelector(
  ".hidden-card-suit-bottom-right"
);
const allCardBox = document.querySelector(".card-box");

const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");

const getStartButtonGame = document.querySelector(".start-button-game");

let cardVisibleRandom;
let cardHiddenRandom;

const getCardVisible = () => {
  getStartButtonGame.addEventListener("click", (event) => {
    cardVisibleRandom = getRandomCard();
    cardHiddenRandom = getRandomCard();

    getStartButtonGame.classList.add("hidden");

    allCardBox.classList.remove("hidden");
    greaterButton.classList.remove("hidden");
    smallerButton.classList.remove("hidden");

    getVisualRandomValue.textContent = cardVisibleRandom.cardsValue;
    getVisualRandomSuitLeft.textContent = cardVisibleRandom.suit;
    getVisualRandomSuitRight.textContent = cardVisibleRandom.suit;
  });
};

getCardVisible();

const getCardHidden = () => {
  greaterButton.addEventListener("click", (event) => {
    getHiddenRandomSuitLeft.textContent = cardHiddenRandom.suit;
    getHiddenRandomValue.textContent = cardHiddenRandom.cardsValue;
    getHiddenRandomSuitRight.textContent = cardHiddenRandom.suit;
    const removeImageHiddernCard = document.querySelector(".card-image");
    removeImageHiddernCard.classList.remove("card-image");
  });
};

getCardHidden();

const cardCheck = () => {
  if (cardHidden.value > cardVisible.value) {
    return "bigger";
  } else if (cardVisible.value > cardHidden.value) {
    return "smaller";
  } else {
    return "equal";
  }
};

// getHiddenRandomSuitRight.classList.remove("hidden");
// getHiddenRandomSuitLeft.classList.remove("hidden");
// getHiddenRandomSuitLeft.classList.remove("hidden");
