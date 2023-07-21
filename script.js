// Задание 1
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
if (num1 <= 1) {
   console.log(`${num1} равна или меньше 1`);
} else {
   console.log(`${num1} больше 1`);
}
if (num2 >= 3) {
   console.log(`${num2} больше или равна 3`);
} else {
   console.log(`${num2} меньше 3`);
}

// Задание 2
let test = true;
console.log(test ? '+++' : '---');

// Задание 3
let day = Math.ceil(Math.random() * 31 + 1);
if (day >= 1 && day <= 10) {
   console.log(`Число ${day} - Первая декада`);
} else if (day > 10 && day <= 20) {
   console.log(`Число ${day} - Вторая декада`);
} else if (day > 20 && day <= 31) {
   console.log(`Число ${day} - Третья декада`);
}

// Задание 4
let userNumber = prompt('Введите число');
let hundreds = (userNumber - userNumber % 100) / 100
let units = userNumber % 10;
let tens = (userNumber % 100 - units) / 10;

console.log(`В числе ${userNumber}:
количество сотен: ${hundreds},
десятков: ${tens},
единиц: ${units}`);