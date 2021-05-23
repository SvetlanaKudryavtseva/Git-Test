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

// [loftschool] Комплексное обучение JavaScript
// 03. Функции
// 03.1_Простая функция
function fn_simple(a, b) {
    let c = a + b;
    console.log(`[loftschool]_03.1 ${c}`);
}
fn_simple(1, 4);
// 03.2_Функция, содержащая объект arguments
function fn_arg(arg1, arg2) {
    console.log(arguments);
}
fn_arg(3, 4, 5, 10, 40); // выведет в консоль объект подобный массиву {'0': 3, '0': 4, '0': 5, '0': 10, '0': 40, }

function fn_arguments() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fn_arguments(4, 2, 5, 5, 40); // выведет в консоль объект подобный массиву {'0': 4, '0': 2, '0': 5, '0': 5, '0': 40, }

function fn_sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log('Сумма всех arguments равна: ' + sum);
}
fn_sum(3, 2, 5, 5, 40); // выведет в консоль  сумму 55

// 03.3_return,  возвращает результат функции и мы можем записать его в переменную и использовать в дальнейшем коде
function fn_return() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var result_return = fn_return(5, 5, 40);
console.log('Return,  возвращает результат функции (чтобы его использовать, его необходимо поместить в переменную): ' + result_return);
console.log('Return,  возвращает результат функции (чтобы его использовать, его необходимо поместить в переменную): ' + result_return);

// 03.4_Типы объявления функций

// 1-й тип: Declaration - объявление
function fn_declar(a, b) {
    return a + b;
}
// 2-й тип: Expression  - выражение = функция в контексте объявления переменной
let fn_express = function fn_expess(a, b) {
    return a + b;
};

let result_declar = fn_declar(2, 2);
let result_express = fn_express(2, 2);

console.log('1-й тип: Declaration - объявление: ' + result_declar);
console.log('2-й тип: Expression  - выражение: ' + result_express);



// [[ItGid] JavaScript v.2.0
// 07. Функции и все о них
// 07.1_Простая функция
let fn1 = document.querySelector('.fn-1'); // получила кнопку

function fn_one() {
    console.log('work');
}
fn_one();

fn1.onclick = fn_one; //!!! не пишем круглые скобки, а только имя функции, которую необходимо запустить

// 07.2_Функция может возвращать значение
console.log(1 + fn_one()); // сейчас fn_one() undefined

console.log(fn_one()); // проверяем, что fn_one() undefined