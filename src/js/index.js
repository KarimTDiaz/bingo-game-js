// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';

const cardLeftElement = document.getElementById('card-left');
const cardRightElement = document.getElementById('card-right');
const cardBingoElement = document.getElementById('card-bingo');
const numberBingoElement = document.getElementById('number-bingo');

let timeoutId;
let arrayNumbers = [];
let numbersRight = [];
let numbersLeft = [];

const randomNumbers = (min, max, quantity) => {
  let numbers = [];

  if (min > max || quantity > max - min) {
    return false;
  }

  while (numbers.length < quantity) {
    const num = Math.floor(Math.random() * (max - min) + min);
    if (numbers.indexOf(num) === -1) {
      numbers.push(num);
    }
  }
  return numbers;
};
/* FUNCION QUE RELLENA ARRAYDE NUMEROS */
const fillArray = () => {
  for (let index = 1; index < 100; index++) {
    arrayNumbers.push(index);
  }
};
/* FUNCION QUE GENERA CARTA IZQ */
const fillLeftCard = () => {
  const fragmentLeft = document.createDocumentFragment();
  numbersLeft = randomNumbers(1, 99, 15);
  numbersLeft.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number-container');
    numberElement.textContent = number;
    numberElement.dataset.left = number;
    fragmentLeft.append(numberElement);
  });
  cardLeftElement.append(fragmentLeft);
};
const fillBingoCard = () => {
  const fragmentBingo = document.createDocumentFragment();
  for (let index = 1; index <= 99; index++) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number-container');

    fragmentBingo.append(numberElement);
    numberElement.textContent = index;
    numberElement.dataset.number = index;
  }
  cardBingoElement.append(fragmentBingo);
};

const fillRightCard = () => {
  const fragmentRight = document.createDocumentFragment();
  numbersRight = randomNumbers(1, 100, 15);
  numbersRight.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number-container');
    numberElement.textContent = number;
    numberElement.dataset.right = number;
    fragmentRight.append(numberElement);
  });
  cardRightElement.append(fragmentRight);
};

const fillTextNumber = number => {
  numberBingoElement.textContent = 'NUMBER' + number;
};

const addClassOnBingoCard = number => {
  const numbers = document.querySelector(`[data-number="${number}"]`);
  const numberCardsRight = document.querySelector(`[data-right="${number}"]`);
  const numberCardsLeft = document.querySelector(`[data-left="${number}"]`);
  if (numbers) {
    numbers.classList.add('red');
  }
  if (numberCardsRight) {
    numberCardsRight.classList.add('blue');
  }
  if (numberCardsLeft) {
    numberCardsLeft.classList.add('yellow');
  }
};

const spliceRandomNumber = () => {
  const index = Math.floor(Math.random() * arrayNumbers.length);
  const randomNumberOfBingo = arrayNumbers[index];
  arrayNumbers.splice(index, 1);
  return randomNumberOfBingo;
};

const timer = () => {
  clearTimeout(timeoutId);
  const numberSelected = spliceRandomNumber();

  fillTextNumber(numberSelected);
  addClassOnBingoCard(numberSelected);
  timeoutId = setTimeout(timer, 200);
};

fillArray();
fillRightCard();
fillLeftCard();
fillBingoCard();

timer();
