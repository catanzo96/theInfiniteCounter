// Classe Counter
class Counter {
  constructor(numberDisplay) {
    this.numberDisplay = numberDisplay;
  };

  addOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1;
    this.numberDisplay.innerText = newNumber;
  };

  subOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    if (current === 0) return;
    let newNumber = current - 1;
    this.numberDisplay.innerText = newNumber;
  };

  reset() {
    this.numberDisplay.innerText = 0;
  };

  addTen() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 10;
    this.numberDisplay.innerText = newNumber;
  };

  addHun() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 100;
    this.numberDisplay.innerText = newNumber;
  };

  addTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1000;
    this.numberDisplay.innerText = newNumber;
  };

  addTenTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 10000;
    this.numberDisplay.innerText = newNumber;
  };

  addHunTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 100000;
    this.numberDisplay.innerText = newNumber;
  };
}

const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');
const tenButton = document.querySelector('.add-ten');
const hundredButton = document.querySelector('.add-hun');
const thousandButton = document.querySelector('.add-tho');
const tenThousandButton = document.querySelector('.add-ten-tho');
const tenHundredButton = document.querySelector('.add-hun-tho');
const numberDisplay = document.querySelector('.number');

const counter = new Counter(numberDisplay);

plusButton.addEventListener('click', function() {
  counter.addOne();
});

minusButton.addEventListener('click', function() {
  counter.subOne();
});

resetButton.addEventListener('click', function() {
  counter.reset();
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

tenThousandButton.addEventListener('click', function() {
  counter.addTenTho();
});

tenHundredButton.addEventListener('click', function() {
  counter.addHunTho();
});
