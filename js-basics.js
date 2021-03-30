// egghead --- Learn ES6 (ECMAScript 2015) --- 01. arrow functions/*
var createGreeting = function(message, name) {
    return message + name;
}
console.log(createGreeting('Hello ', 'You'));

var arrowFunction = (message, name) => {
    return message + name;
}
console.log(arrowFunction('Hello ', 'arrowYou'));

var arrowFunction__small = (message, name) => message + name;

console.log(arrowFunction__small('Hello ', 'arrowYou__small'));

var arrowFunction__small__oneParameter = message => message;

console.log(arrowFunction__small__oneParameter('arrowYou___oneParameter'));

// itgid.info --- JavaScript v. 2.0 --- 01. innerHTML
document.querySelector('.inner').innerHTML = "Inner HTML";

// itgid.info --- JavaScript v. 2.0 --- 06. Циклы
let arr = [1, 2, 3, 4, 5];
console.log(arr);
for (i = 0; i < arr.length; i++) {
    console.log(arr[1])
}

let one = document.querySelector('.one')
console.log(one);
one.style.background = "red";
let two = document.querySelectorAll('.two')
console.log(two);
for (i = 0; i < two.length; i++) {
    console.log(two[i])
    two[i].style.border = "1px solid blue";
}
let stars = document.querySelectorAll('.stars')
console.log(stars);
for (let i = 0; i < stars.length; i++) {
    stars[i].innerHTML = '*****';
}

document.querySelector('.button-for-radio').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}