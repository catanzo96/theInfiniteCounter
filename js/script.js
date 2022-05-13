// Classe Counter
class Counter {
  constructor(numberDisplay, circle) {
    this.numberDisplay = numberDisplay;
    this.circle = circle;
    this.diameter = parseFloat(getComputedStyle(circle).height);
  };
  // Funzione +1
  addOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
  };
  // Funzione -1
  subOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    if (current === 0) return;
    let newNumber = current - 1;
    this.numberDisplay.innerText = newNumber;
    this.moveOut();
  };
  // Funzione Reset
  reset() {
    const current = parseFloat(this.numberDisplay.innerText);
    if (current === 0) return;
    this.numberDisplay.innerText = 0;
    this.moveOut();
  };
  // Funzione +10
  addTen() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 10;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
  };
  // Funzione +100
  addHun() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 100;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
  };
  // Funzione +1000
  addTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1000;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
  };
  // Funzione +10000
  addTenTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 10000;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
  };
  // Funzione +100000
  addHunTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 100000;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
  };
  // Funzione Dimensioni Cerchio
  circleSize() {
    let newDiameter;
    let currentNumber = parseFloat(this.numberDisplay.innerText);

    if (currentNumber < 1000) {
      newDiameter = this.diameter + (currentNumber / 5);
    } else if (currentNumber >= 1000 && currentNumber < 10000) {
      newDiameter = this.diameter + (currentNumber / 50);
    } else if (currentNumber >= 10000 && currentNumber < 100000) {
      newDiameter = this.diameter + (currentNumber / 500);
    } else if (currentNumber >= 100000 && currentNumber < 1000000) {
      newDiameter = this.diameter + (currentNumber / 5000);
    } else {
      newDiameter = this.diameter + (currentNumber / 500000);
    };

    this.circle.style.width = newDiameter + 'px';
    this.circle.style.height = newDiameter + 'px';
    this.circle.style.borderRadius = (newDiameter / 2) + 'px';
  };
  // Funzione cerchio out
  moveOut() {
    circleOut.classList.add('move-out');
    setTimeout(function() {
    circleOut.classList.remove('move-out');
    }, 300)
  };
  // Funzione cerchio in
  moveIn() {
    circleIn.classList.add('move-in');
    setTimeout(function() {
    circleIn.classList.remove('move-in');
    }, 300)
  };

}
// Selettore Cerchio
const circle = document.querySelector('.circle');
// Selettore Numero Visualizzato
const numberDisplay = document.querySelector('.number');
// Selettori pulsanti base (+ / - / Reset)
const plusButton = document.querySelector('.plus'), minusButton = document.querySelector('.minus'), resetButton = document.querySelector('.reset');
// Selettori pulsanti speciali (+10 / +100 / +1000)
const tenButton = document.querySelector('.add-ten'), hundredButton = document.querySelector('.add-hun'), thousandButton = document.querySelector('.add-tho');
// Selettori pulsanti speciali (+10000 / +100000)
const tenThousandButton = document.querySelector('.add-ten-tho'), tenHundredButton = document.querySelector('.add-hun-tho');

const circleOut = document.querySelector('.out-circle');
const circleIn = document.querySelector('.in-circle');

const counter = new Counter(numberDisplay, circle);

// Eventi pulsanti:
// Evento +1
plusButton.addEventListener('click', function() {
  counter.addOne();
  counter.circleSize();
});
// Evento -1
minusButton.addEventListener('click', function() {
  counter.subOne();
  counter.circleSize();
});
// Evento Reset
resetButton.addEventListener('click', function() {
  counter.reset();
  counter.circleSize();
});
// Evento +10
tenButton.addEventListener('click', function() {
  counter.addTen();
  counter.circleSize();
});
// Evento +100
hundredButton.addEventListener('click', function() {
  counter.addHun();
  counter.circleSize();
});
// Evento +1000
thousandButton.addEventListener('click', function() {
  counter.addTho();
  counter.circleSize();
});
// Evento +10000
tenThousandButton.addEventListener('click', function() {
  counter.addTenTho();
  counter.circleSize();
});
// Evento +100000
tenHundredButton.addEventListener('click', function() {
  counter.addHunTho();
  counter.circleSize();
});
