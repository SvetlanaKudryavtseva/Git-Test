// egghead --- Learn ES6 (ECMAScript 2015) --- 01. arrow functions
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