import { generateRandomNumber} from "./random-number.js";

let arrayOfNumbers = Array(99).fill().map((_ , index)=>index+1);

const fillCardsArray = (array , max) => {
    while(array.length < max){
        const number = generateRandomNumber();
        if(!array.includes(number)) array.push(number)
    }
} 

const createGameBoard = (numbers, container) => {
    const fragment = document.createDocumentFragment();
    numbers.forEach(number => {
        const numberElement = document.createElement('span')
        numberElement.classList.add('number')
        numberElement.textContent = number
        numberElement.dataset.number = number
        fragment.append(numberElement)
    });
    container.append(fragment)
}

const createBingoBoard = (container) => {
    const fragment = document.createDocumentFragment();
    arrayOfNumbers.forEach(number => {
        const numberElement = document.createElement('span')
        numberElement.classList.add('number--bingo')
        numberElement.textContent = number
        numberElement.dataset.number = number
        fragment.append(numberElement)
    })
    container.append(fragment)
}

export {fillCardsArray ,createGameBoard, createBingoBoard}