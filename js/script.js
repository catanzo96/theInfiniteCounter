// HTML elements creation
const container = document.createElement('div'), row = document.createElement('div'), counterPad = document.createElement('div');
document.body.append(container);
container.append(row);
row.append(counterPad)
container.classList.add('page','container-fluid','d-flex','justify-content-center','align-items-center');
row.classList.add('circle','d-flex','justify-content-center','align-items-center');
counterPad.classList.add('counter','d-flex','justify-content-center','align-items-center');

const minus = document.createElement('button'), plus = document.createElement('button');
minus.innerHTML += '-';
plus.innerHTML += '+';
minus.classList.add('minus');
plus.classList.add('plus');

const number = document.createElement('div');
number.innerHTML += '0';
number.classList.add('number','text-center');

counterPad.append(minus, number, plus);
