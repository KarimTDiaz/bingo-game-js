const cardLeftElement = document.getElementById('card-left');
const cardRightElement = document.getElementById('card-right');
const cardBingoElement = document.getElementById('card-bingo');
const numberBingoElement = document.getElementById('number-bingo');


let timeoutId;
let arrayNumbers = [];
let bingoElements=[];


const generateRandomNumber = () => {
    let randomNumber =Math.floor(Math.random() * arrayNumbers.length+1)
    return randomNumber
}


const fillLeftCard = () => {
    const fragmentLeft = document.createDocumentFragment();
    for (let index = 0; index < 15; index++) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number-container');
        numberElement.textContent = generateRandomNumber();
        numberElement.dataset.number = numberElement.textContent;
        fragmentLeft.append(numberElement)
    }
    cardLeftElement.append(fragmentLeft)

}

const fillRightCard = () => {
    const fragmentRight = document.createDocumentFragment()
    for (let index = 0; index < 15; index++) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number-container')
        numberElement.textContent = generateRandomNumber();
        numberElement.dataset.number = numberElement.textContent;

        fragmentRight.append(numberElement)

    }
    cardRightElement.append(fragmentRight)
}

const fillBingoCard = () => {
const fragmentBingo = document.createDocumentFragment()
for (let index = 1; index < 100; index++) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number-container-bingo');
    fragmentBingo.append(numberElement);
    numberElement.textContent = index;
    numberElement.dataset.number = index;

}
cardBingoElement.append(fragmentBingo);
 bingoElements = document.querySelectorAll('.number-container-bingo')


}

const fillArray = () => {
    for (let index = 1; index < 100; index++) {
        arrayNumbers.push(index)
    }
}


const fillTextNumber = (number) => {
    numberBingoElement.textContent = 'NUMBER' + number
}

const addClassOnBingoCard = () => {
    [...bingoElements].forEach(element => {
    console.log(element)
})
}

const spliceRandomNumber = () => {
    clearTimeout(timeoutId);
    const index = Math.floor(Math.random()*arrayNumbers.length);
    const randomNumberOfBingo = arrayNumbers[index]
    arrayNumbers.splice(index,1)
    fillTextNumber(randomNumberOfBingo)
    timeoutId = setTimeout(spliceRandomNumber,200)
    return randomNumberOfBingo
}



spliceRandomNumber()
addClassOnBingoCard()
fillArray()




export {fillLeftCard, fillRightCard, fillBingoCard ,bingoElements}
 