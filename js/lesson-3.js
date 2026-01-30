// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// // const newNumbers = numbers.map(number => number ** 2);
// // console.log(newNumbers);

// const newNumbers = (arr, pow) => arr.map(number => Math.pow(number, pow));
// console.log(newNumbers(numbers, 2));

// >>>>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newData = array => array.flatMap(object => object.values);
// console.log(newData(data));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'Bob', age: 19 },
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
// ];
// const checkAge = (array, age) =>
//   array.some(person => {
//     console.log(person);

//     return person.age < age;
//   });
// console.log(checkAge(people, 20));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const checkNumber = (array, value) =>
//   array.every(number => number % value === 0);
// console.log(checkNumber(numbers, 2));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const findNumber = (array, value) => array.find(number => number % value !== 0);
// console.log(findNumber(numbers, 2));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedArray = numbersArray.toSorted((num1, num2) => num1 - num2);
// console.log(sortedArray);

//>>>>>>>>>>>>>>>>>>>>>>

//Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// // const sortedString = stringArray.toSorted((word1, word2) =>
// //   word1.localeCompare(word2)
// // );
// const sortedArray = array =>
//   array.toSorted((word1, word2) => word1.localeCompare(word2));
// console.log(sortedArray(stringArray));

//>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const sortedUsers = array => array.toSorted((a, b) => a.age - b.age);
// console.log(sortedUsers(users));

//>>>>>>>>>>>>>>>>>>>>>>>>.

//Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const filterUsers = (array, age) => array.filter(user => user.age > age);
// console.log(filterUsers(users, 20));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sumOfNumbers = array =>
//   array.reduce((acc, number) => {
//     return (acc += number);
//   }, 0);
// console.log(sumOfNumbers(numbers));

//>>>>>>>>>>>>>>>>>>>>>>>>>>.

// /Підрахунок кількості повторень
// //Дано масив:
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const newArray = array =>
//   array.reduce(
//     (acc, fruit) => {
//       acc[fruit] = (acc[fruit] || 0) + 1;
//       console.log(acc[fruit]);
//       return acc;
//     },
//     {},
//     0
//   );
// console.log(newArray(fruits));
// //Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// //Очікуваний результат:
// //{
//  // apple: 3,
//  // banana: 2,
//  // orange: 1
// //}

//Згладження вкладеного масиву
//Дано вкладений масив:
// const nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const floatedArray = array => array.raduce(acc, nest);
// //Завдання: За допомогою reduce перетворіть вкладений масив у плаский.
// //Очікуваний результат:
// //[1, 2, 3, 4, 5, 6]

//Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// class Calculator {
//   constructor() {
//     this.result;
//   }
//   number(value) {
//     this.result = value;
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }
//   add(value) {
//     this.result += value;
//     return this;
//   }
//   substract(value) {
//     this.result -= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) return this;
//     this.result /= value;
//     return this;
//   }
//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .substract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result); // 24

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
// class Client {
//   #login;
//   #email;
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client = new Client();
// client.login = 'admin';
// client.email = 'admin@email.com';
// console.log(client.login);
// console.log(client.email);

//>>>>>>>>>>>>>>>>>>>>>>>

//Завдання 13:
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
// class Person {
//   constructor({ name, age, gender, email }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }
// const data = {
//   name: 'admin',
//   age: 30,
//   gender: 'male',
//   email: 'admin@email.com',
//   salary: 5000,
//   department: 'developer',
// };
// // const person = new Person(data);
// // console.log(person.getDetails());

// class Emploee extends Person {
//   constructor({ salary, department, ...data }) {
//     super(data);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       dapartment: this.department,
//     };
//   }
// }
// const emploee = new Emploee(data);
// console.log(emploee.getEmployeeDetails());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
