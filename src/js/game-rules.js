let timeoutId;
let arrayOfNumbers;
let luckyNumbersPc = [];
let luckyNumbersUser = [];

const arrayToExtract = () => {
  arrayOfNumbers = Array(99)
    .fill()
    .map((_, index) => index + 1);
};

const cardBingoElement = document.getElementById('card-bingo');
const userCardElement = document.getElementById('card-user');
const userPcElement = document.getElementById('card-pc');
const startButtonElement = document.getElementById('button-start');
const playAgainButtonElement = document.getElementById('button-play-again');
const numbersButtonElement = document.getElementById('button-numbers');

const spliceRandomNumber = () => {
  const index = Math.floor(Math.random() * arrayOfNumbers.length);
  const numberSpliced = arrayOfNumbers[index];
  arrayOfNumbers.splice(index, 1);
  return numberSpliced;
};

const checkCardsResult = numberSelected => {
  [...cardBingoElement.children].forEach(number => {
    if (Number(number.dataset.number) === numberSelected) {
      number.classList.add('red');
    }
  });

  [...userCardElement.children].forEach(number => {
    if (Number(number.dataset.number) === numberSelected) {
      number.classList.add('blue');
      luckyNumbersUser.push(number.dataset.number);
    }
  });

  [...userPcElement.children].forEach(number => {
    if (Number(number.dataset.number) === numberSelected) {
      number.classList.add('yellow');
      luckyNumbersPc.push(number.dataset.number);
    }
  });
};

const showButtonsNumbers = () => {
  startButtonElement.classList.add('button-unshow');
  if (numbersButtonElement.classList.contains('button-unshow')) {
    numbersButtonElement.classList.add('button-show');
    numbersButtonElement.classList.remove('button-unshow');
  } else {
    numbersButtonElement.classList.add('button-unshow');
    numbersButtonElement.classList.remove('button-show');
  }
};

const showButtonPlayAgain = () => {
  if (playAgainButtonElement.classList.contains('button-unshow')) {
    playAgainButtonElement.classList.add('button-show');
    playAgainButtonElement.classList.remove('button-unshow');
  } else {
    playAgainButtonElement.classList.add('button-unshow');
    playAgainButtonElement.classList.remove('button-show');
  }
};

const showNumbers = number => {
  numbersButtonElement.textContent = number;
};

const timer = () => {
  clearTimeout(timeoutId);
  if (luckyNumbersPc.length < 15 && luckyNumbersUser.length < 15) {
    const numberSelected = spliceRandomNumber();
    checkCardsResult(numberSelected);
    showNumbers(numberSelected);
    timeoutId = setTimeout(timer, 200);
  } else {
    showButtonPlayAgain();
    showButtonsNumbers();
    luckyNumbersPc = [];
    luckyNumbersUser = [];
  }
};

export { timer, arrayToExtract, showButtonsNumbers, showButtonPlayAgain };
