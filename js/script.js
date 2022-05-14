// Classe Counter
class Counter {
  constructor(numberDisplay, circleBody, circleIn, circleOut) {
    this.numberDisplay = numberDisplay;
    this.circleBody = circleBody;
    this.diameter = parseFloat(getComputedStyle(circleBody).height);
    this.circleIn = circleIn;
    this.circleOut = circleOut;
    this.body = body;
  };
  // Funzione +1
  addOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
    this.unlock();
  };
  // Funzione -1
  subOne() {
    const current = parseFloat(this.numberDisplay.innerText);
    if (current === 0) return;
    let newNumber = current - 1;
    this.numberDisplay.innerText = newNumber;
    this.moveOut();
    this.unlock();
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
    this.unlock();
  };
  // Funzione +100
  addHun() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 100;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
    this.unlock();
  };
  // Funzione +1000
  addTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 1000;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
    this.unlock();
  };
  // Funzione +10000
  addTenTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 10000;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
    this.unlock();
  };
  // Funzione +100000
  addHunTho() {
    const current = parseFloat(this.numberDisplay.innerText);
    let newNumber = current + 100000;
    this.numberDisplay.innerText = newNumber;
    this.moveIn();
    this.lock();
  };
  // Funzione Modifiche Cerchi
  circleMod() {
    let newDiameter;
    let currentNumber = parseFloat(this.numberDisplay.innerText);

    if (currentNumber < 1000) {
      newDiameter = this.diameter + (currentNumber / 5);
      this.circleBody.style.backgroundColor = '#D6FF4C';
      this.circleIn.style.backgroundColor = '#D6FF4C';
      this.circleOut.style.backgroundColor = '#D6FF4C';
      this.body.style.background = '#F9FFE6';
    } else if (currentNumber >= 1_000 && currentNumber < 10_000) {
      newDiameter = this.diameter + (currentNumber / 50);
      this.circleBody.style.backgroundColor = '#FFFA4C';
      this.circleIn.style.backgroundColor = '#FFFA4C';
      this.circleOut.style.backgroundColor = '#FFFA4C';
      this.body.style.background = '#FFFED1';
    } else if (currentNumber >= 10_000 && currentNumber < 100_000) {
      newDiameter = this.diameter + (currentNumber / 500);
      this.circleBody.style.backgroundColor = '#FFD44C';
      this.circleIn.style.backgroundColor = '#FFD44C';
      this.circleOut.style.backgroundColor = '#FFD44C';
      this.body.style.background = '#FFF0C2';
    } else if (currentNumber >= 100_000 && currentNumber < 1_000_000) {
      newDiameter = this.diameter + (currentNumber / 5000);
      this.circleBody.style.backgroundColor = '#FFAB4C';
      this.circleIn.style.backgroundColor = '#FFAB4C';
      this.circleOut.style.backgroundColor = '#FFAB4C';
      this.body.style.background = '#FFE1BF';
    } else if (currentNumber >= 1_000_000 && currentNumber < 10_000_000) {
      newDiameter = this.diameter + (currentNumber / 50000);
      this.circleBody.style.backgroundColor = '#FF7D4C';
      this.circleIn.style.backgroundColor = '#FF7D4C';
      this.circleOut.style.backgroundColor = '#FF7D4C';
      this.body.style.background = '#FFD7C8';
    } else {
      newDiameter = this.diameter + (currentNumber / 5000000);
      this.circleBody.style.backgroundColor = '#FF4C4C'
      this.circleIn.style.backgroundColor = '#FF4C4C';
      this.circleOut.style.backgroundColor = '#FF4C4C';
      this.body.style.background = '#FFBABA';
    };

    this.circleBody.style.width = newDiameter + 'px';
    this.circleBody.style.height = newDiameter + 'px';
    this.circleBody.style.borderRadius = (newDiameter / 2) + 'px';
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
  // Funzione sblocco pulsanti
  unlock() {
    const current = parseFloat(this.numberDisplay.innerText);
    if (current >= 1_000) {
      tenButton.classList.remove('locked');
      tenButton.removeAttribute('disabled');
      if (current >= 10_000) {
        hundredButton.classList.remove('locked');
        hundredButton.removeAttribute('disabled');
        if (current >= 100_000) {
          thousandButton.classList.remove('locked');
          thousandButton.removeAttribute('disabled');
          if (current >= 1_000_000) {
            tenThousandButton.classList.remove('locked');
            tenThousandButton.removeAttribute('disabled');
            if (current >= 10_000_000) {
              tenHundredButton.classList.remove('locked');
              tenHundredButton.removeAttribute('disabled');
            };
          };
        };
      };
    };
  };
}

// Selettore body
const body = document.body;
// Selettore Cerchi
const circleBody = document.querySelector('.circle');
const circleOut = document.querySelector('.out-circle');
const circleIn = document.querySelector('.in-circle');
// Selettore Numero Visualizzato
const numberDisplay = document.querySelector('.number');
// Selettori pulsanti base (+ / - / Reset)
const plusButton = document.querySelector('.plus'), minusButton = document.querySelector('.minus'), resetButton = document.querySelector('.reset');
// Selettori pulsanti speciali (+10 / +100 / +1000)
const tenButton = document.querySelector('.add-ten'), hundredButton = document.querySelector('.add-hun'), thousandButton = document.querySelector('.add-tho');
// Selettori pulsanti speciali (+10000 / +100000)
const tenThousandButton = document.querySelector('.add-ten-tho'), tenHundredButton = document.querySelector('.add-hun-tho');

const counter = new Counter(numberDisplay, circleBody, circleIn, circleOut);

// Eventi pulsanti:
// Evento +1
plusButton.addEventListener('click', function() {
  counter.addOne();
  counter.circleMod();
});
// Evento -1
minusButton.addEventListener('click', function() {
  counter.subOne();
  counter.circleMod();
});
// Evento Reset
resetButton.addEventListener('click', function() {
  counter.reset();
  counter.circleMod();
});
// Evento +10
tenButton.addEventListener('click', function() {
  counter.addTen();
  counter.circleMod();
});
// Evento +100
hundredButton.addEventListener('click', function() {
  counter.addHun();
  counter.circleMod();
});
// Evento +1000
thousandButton.addEventListener('click', function() {
  counter.addTho();
  counter.circleMod();
});
// Evento +10000
tenThousandButton.addEventListener('click', function() {
  counter.addTenTho();
  counter.circleMod();
});
// Evento +100000
tenHundredButton.addEventListener('click', function() {
  counter.addHunTho();
  counter.circleMod();
});
