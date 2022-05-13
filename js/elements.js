// Creazione elementi:
// Titolo
const title = document.createElement('div');
title.classList.add('container-fluid', 'fixed-top', 'text-center');
title.innerHTML += '<h1>The Infinite Counter</h1>';
document.body.append(title);

// Container Bootstrap
const container = document.createElement('div');
container.classList.add('page','container-fluid','d-flex','justify-content-center','align-items-center');
document.body.append(container);

// Cerchio
circle = document.createElement('div');
circle.classList.add('circle','d-flex','justify-content-center','align-items-center');
container.append(circle);

// Numero
number = document.createElement('div');
number.innerHTML += '0';
number.classList.add('number','text-center');
container.append(number);

// Pulsanti:
buttons = document.createElement('div');
buttons.classList.add('buttons','d-flex','justify-content-center','align-items-center');
container.append(buttons);

// -
const minus = document.createElement('button')
minus.innerHTML += '-';
minus.classList.add('minus');

// +
const plus = document.createElement('button')
plus.innerHTML += '+';
plus.classList.add('plus');

// Reset
const reset = document.createElement('button')
reset.innerHTML += 'R';
reset.classList.add('reset');

// +10
addTen = document.createElement('button');
addTen.innerHTML += '+ 10';
addTen.classList.add('add-ten');

// +100
addHun = document.createElement('button');
addHun.innerHTML += '+ 100';
addHun.classList.add('add-hun');

// +1000
addTho = document.createElement('button');
addTho.innerHTML += '+ 1K';
addTho.classList.add('add-tho');

// +10000
addTenTho = document.createElement('button');
addTenTho.innerHTML += '+ 10K';
addTenTho.classList.add('add-ten-tho');

// +100000
addHunTho = document.createElement('button');
addHunTho.innerHTML += '+ 100K';
addHunTho.classList.add('add-hun-tho');

buttons.append(minus, plus, reset, addTen, addHun, addTho, addTenTho, addHunTho);

// cerchi in movimento
const outCircle = document.createElement('div');
outCircle.classList.add('out-circle', 'd-flex', 'justify-content-center', 'align-items-start');
container.append(outCircle);

const inCircle = document.createElement('div');
inCircle.classList.add('in-circle', 'd-flex', 'justify-content-center', 'align-items-top');
container.append(inCircle);
