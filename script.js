'use strict';
// Домашнее задание 1

let Tc = +prompt('Введите градусы по Целсию!');
let Tf = (9 / 5) * Tc + 32;
alert('Температура по Фаренгейту: ' + Tf);

// Домашнее задание 2

let name = 'Василий';
let admin = name;
console.log(admin);

// Домашнее задание 3

let result1 = 10 + 10 + "10";
console.log(result1);
/*
1. к 10 прибавлаем 10 получаем 20
2. 20 конкатенируем со строкой 10 получаем строку 2010
3. строку 2010 присваиваем в переменную result1
4. выводим в консоль переменную result1 строку 2010
*/

let result2 = 10 + "10" + 10;
console.log(result2);
/*
1. число 10 конкатенируем со сторкой 10 и числом 10
2. получаем строку 101010
3. строку 101010 присваиваем в переменную result2
4. выводим в консоль переменную result2 строку 101010
*/

let result3 = 10 + 10 + +"10";
console.log(result3);
/*
1. к 10 прибавляем 10 и с помощью унарного плюса преобразуем строку 10 в число 10 и прибавляем к 20
2. получаем число 30
3. число 30 присваиваем в переменную result3
4. выводим в консоль переменную result3 число 30
*/

let result4 = 10 / -"";
console.log(result4);
/*
1. с помощью унарного минуса преобразуем пустую строку в минус 0 и 10 / -0
2. получаем -Infinity 
3. число 30 присваиваем в переменную result4
4. выводим в консоль переменную result4 число 30
*/

let result5 = 10 / +"2,5";
console.log(result5);
/*
1. дробная часть должна отделяться точкой, поэтому получаем NaN
2. 10 делим на NaN получаем NaN
3. NaN присваиваем переменной result5
4. выводим в консоль переменную result5 co значением NaN
*/

// Домашнее задание 4

let mode = "normal";
let my_valu3 = 102;
let 3my_value3 = "102"; // Неправильно. Имя переменной не должно начинаться с цифры
let __hello__ = "world";
let $$$ = "money";
let !0_world = true; // Неправильно. Имя переменной может начинаться со знака доллар или нижнего подчеркивания