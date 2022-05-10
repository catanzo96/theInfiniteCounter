// HTML elements creation
const title = document.createElement('h1');
document.body.append(title);
title.innerHTML += 'THE INFINITE COUNTER';

const circle = document.createElement('div');
document.body.append(circle);
circle.classList.add('circle');

const minus = document.createElement('button');
minus.innerHTML += '-';
minus.classList.add('minus');

const number = document.createElement('div');
number.innerHTML += '0';
number.classList.add('number');

const plus = document.createElement('button');
plus.innerHTML += '+';
plus.classList.add('plus');

circle.append(minus, number, plus);
