'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
var obj = {};

// let person = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };
// console.log(person.name);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[0]);

// alert("Hello, world!");
// confirm("Are you here?");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Вам уже есть 18?", "Да");
// // console.log(answer);
// console.log(typeof(answer));

let incr = 10,
		decr = 10;

// incr++;
// decr--;
console.log(incr++);
console.log(decr--);

console.log(5%2); //выводит остаток от деления
console.log('2' === 2); //сравнение по типам данных

let isChecked = false,
		isFalse = false;

console.log(isChecked && isFalse); // оператор "и"
console.log(isChecked || isFalse); // оператор "или"
console.log(isChecked || !isFalse); // оператор "или" со знаком отрицания у одного компонента
