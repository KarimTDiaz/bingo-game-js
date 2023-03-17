
let timeoutId;
let arrayOfNumbers = Array(99).fill().map((_ , index)=>index+1);
let luckyNumbersPc = [];
let luckyNumbersUser = []

const cardBingoElement = document.getElementById('card-bingo');
const userCardElement = document.getElementById('card-user');
const userPcElement = document.getElementById('card-pc');

const spliceRandomNumber = () => {
    const index = Math.floor(Math.random() * arrayOfNumbers.length);
    const numberSpliced = arrayOfNumbers[index];
    arrayOfNumbers.splice(index, 1);
    return numberSpliced;
  };

const checkCardsResult = (numberSelected) => {
  [...cardBingoElement.children].forEach(number => {
    if(Number(number.dataset.number) === numberSelected){
      number.classList.add('red')
    }
  });

  [...userCardElement.children].forEach(number => {
    if(Number(number.dataset.number) === numberSelected){
      number.classList.add('blue')
      luckyNumbersUser.push(number.dataset.number)
    }
  });

  [...userPcElement.children].forEach(number => {
    if(Number(number.dataset.number) === numberSelected){
      number.classList.add('yellow')
      luckyNumbersPc.push(number.dataset.number)
    }
  })
}


const timer = () => {
  clearTimeout(timeoutId)
  if(luckyNumbersPc.length < 15 && luckyNumbersUser.length < 15  ){
    const numberSelected = spliceRandomNumber();
    checkCardsResult(numberSelected);
    timeoutId = setTimeout(timer, 200);
  }
}

export {timer}