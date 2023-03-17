// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { fillCardsArray, createGameBoard , createBingoBoard} from './game-board.js';
import { timer } from './extract-random-number.js';


const userCardElement = document.getElementById('card-user');
const userPcElement = document.getElementById('card-pc');
const cardBingoElement = document.getElementById('card-bingo');

let userNumbers = []
let pcNumbers = []


createBingoBoard(cardBingoElement)

fillCardsArray(userNumbers,15)
fillCardsArray(pcNumbers,15)

createGameBoard(userNumbers,userCardElement)
createGameBoard(pcNumbers,userPcElement)

timer()


