'use strict';

// задание 1
//пример 1 

let a = 1, // в переменную а присваиваем 1
    b = 1, // в переменную b присваиваем 1
    c,     // переменная с со значением undefind
    d;     // переменная d со значением undefind
c = ++a;   // увеличиваем инкремент а на 1 и присваиваем переменной с
alert(c); // ответ: 2

//пример 2 

d = b++;  // в переменную d присваиваем переменную b со значением 1, затем увеличиваем инкремент на 1
alert(d); //ответ: 1

//пример 3 

c = 2 + ++a; // увеличиваем инкремент а co начением 2 на 1 и складываем с 2, 5 присваиваем переменной с
alert(c); //ответ: 5

//пример 4 

d = 2 + b++; // увеличенный инкремент b co значением 2 складываем с 2, получаем 4 и присваиваем переменной d. Увеличиваем b на 1
alert(d); //ответ: 4

alert(a); //3 а со значение 3
alert(b); //3 b co значением 3

// Задание 2

let a = 2; // присваиваем переменной а значение 2
let x = 1 + (a *= 2); // в скобках умножаем переменную а со значением 2 на 2 и присваиваем а 4, прибавляем к 4 1 получаем 5

// Задание 3

let a = parseInt(prompt('Введите первое целое число'));
let b = parseInt(prompt('Введите второе целое число'));
if (a >= 0 && b >= 0) {
    alert('Разность чисел: ' + (a - b)); // Если оба числа положительные выводим разность
} else if (a < 0 && b < 0) {
    alert('Произведение чисел: ' + (a * b)); // Если оба числа отрицательные выводим произведение
}  else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    alert('Сумма чисел: ' + (a + b)); // Если одно из чисел положительное, а другое отрицательное выводим сумму
} else {
    alert('Вы ввели не число!'); // Если введено не число сообщаем об ошибке
}

// Задание 4

/**
 * Функция сложения
 *
 * @param {*number} a
 * @param {*number} b
 * @return {*number} 
 */
function sum(a, b) {
    return a + b;
}

/**
 *Функция вычитания
 *
 * @param {*number} a
 * @param {*number} b
 * @return {*number} 
 */
function subtract(a, b) {
    return a - b;
}

/**
 *Функция умножения
 *
 * @param {*number} a
 * @param {*number} b
 * @return {*number} 
 */
function multi(a, b) {
    return a * b;
}

/**
 *Функция деления
 *
 * @param {*number} a
 * @param {*number} b
 * @return {*number} 
 */
function division (a, b) {
    return a / b;
}

// Задание 5

/**
 *
 *
 * @param {number} arg1
 * @param {number} arg2
 * @param {} operation
 * @return {number} 
 */
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':
            return sum(arg1, arg2);
        case 'вычитание':
            return subtract(arg1, arg2);
        case 'умножение':
            return multi(arg1, arg2);
        case 'деление':
            return division(arg1, arg2);
        default:
            throw new Error("Не верная математическая операция " + operation);
    }
}

console.log(mathOperation(4, 5, 'сложение'));
console.log(mathOperation(7, 10, 'вычитание'));
console.log(mathOperation(13, 3, 'умножение'));
console.log(mathOperation(40, 8, 'деление'));
console.log(mathOperation(4, 8, 'корень'));