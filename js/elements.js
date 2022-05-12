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

let number = document.createElement('div');
number.innerHTML += '0';
number.classList.add('number','text-center');

counterPad.append(minus, number, plus);

controlPad = document.createElement('div');
container.append(controlPad);
controlPad.classList.add('pad','d-flex','justify-content-center','align-items-center');

const restart = document.createElement('button'), addTen = document.createElement('button'), addHun = document.createElement('button'), addTho = document.createElement('button');

restart.innerHTML += 'Restart';
restart.classList.add('restart');
addTen.innerHTML += '+ 10';
addTen.classList.add('addten');
addHun.innerHTML += '+ 100';
addHun.classList.add('addhun');
addTho.innerHTML += '+ 1000';
addTho.classList.add('addtho');

controlPad.append(restart, addTen, addHun, addTho);
