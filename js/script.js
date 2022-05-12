// Componenti counter
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const restartButton = document.querySelector('.restart');
const tenButton = document.querySelector('.addten');
const hundredButton = document.querySelector('.addhun');
const thousandButton = document.querySelector('.addtho');
const numberDisplay = document.querySelector('.number');

class Counter {
  constructor(numberDisplay) {
    this.numberDisplay = numberDisplay;
  }

  addOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1;
    this.numberDisplay.innerText = newNumber;
  }

  subOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    if (current === 0) return;
    let newNumber = current - 1;
    this.numberDisplay.innerText = newNumber;
  }

  restart() {
    this.numberDisplay.innerText = 0;
  }

  addTen() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 10;
    this.numberDisplay.innerText = newNumber;
  }

  addHun() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 100;
    this.numberDisplay.innerText = newNumber;
  }

  addTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1000;
    this.numberDisplay.innerText = newNumber;
  }
}

const counter = new Counter(numberDisplay);

plusButton.addEventListener('click', function() {
  counter.addOne();
});

minusButton.addEventListener('click', function() {
  counter.subOne();
});

restartButton.addEventListener('click', function() {
  counter.restart();
});

tenButton.addEventListener('click', function() {
  counter.addTen();
});

hundredButton.addEventListener('click', function() {
  counter.addHun();
});

thousandButton.addEventListener('click', function() {
  counter.addTho();
});
