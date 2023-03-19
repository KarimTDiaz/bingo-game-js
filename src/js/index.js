// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import {
  fillCardsArray,
  createGameBoard,
  createBingoBoard
} from './game-board.js';
import { timer, arrayToExtract } from './game-rules.js';

const userCardElement = document.getElementById('card-user');
const userPcElement = document.getElementById('card-pc');
const cardBingoElement = document.getElementById('card-bingo');
const startButtonElement = document.getElementById('button-start');
const playAgainButtonElement = document.getElementById('button-play-again');

let userNumbers = [];
let pcNumbers = [];

startButtonElement.addEventListener('click', () => {
  timer();
});
arrayToExtract();
createBingoBoard(cardBingoElement);

fillCardsArray(userNumbers, 15);
fillCardsArray(pcNumbers, 15);

createGameBoard(userNumbers, userCardElement, ['number', 'number--user']);
createGameBoard(pcNumbers, userPcElement, ['number', 'number--pc']);

playAgainButtonElement.addEventListener('click', () => {
  cardBingoElement.innerHTML = '';
  userCardElement.innerHTML = '';
  userPcElement.innerHTML = '';
  userNumbers = [];
  pcNumbers = [];
  arrayToExtract();
  createBingoBoard(cardBingoElement);
  fillCardsArray(userNumbers, 15);
  fillCardsArray(pcNumbers, 15);
  createGameBoard(userNumbers, userCardElement, ['number', 'number--user']);
  createGameBoard(pcNumbers, userPcElement, ['number', 'number--pc']);
  timer();
});
