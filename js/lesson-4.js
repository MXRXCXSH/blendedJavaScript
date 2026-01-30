// 1. У файлі index.html  до базової розмітки додай розмітку:
// <div class="container">
// <!-- Task - 01 -->
//   <h1 id="title">Базові операції з DOM</h1>
//     <ul class="list">
//       <li data-topic="navigation">
//         <h3>Навігація по DOM</h3>
//         <p>
//           Доступ до DOM починається з об'єкта document, з нього можна дістатися
//           до будь-яких елементів.
//         </p>
//       </li>
//       <li data-topic="search">
//         <h3>Пошук елементів</h3>
//         <p>
//           Група методів elem.querySelector* - це сучасний стандарт для пошуку
//           елементів.
//         </p>
//       </li>
//       <li data-topic="props">
//         <h3 class="completed">Властивості та атрибути</h3>
//         <p>
//           elem.textContent, elem.classList, elem.style, elem.hasAttribute(name),
//           elem.getAttribute(name), elem.setAttribute(name, value),
//           elem.removeAttribute(name)
//         </p>
//       </li>
//       <li data-topic="manipulation">
//         <h3>Створення та видалення елементів</h3>
//         <p>
//           DOM API дозволяє не тільки вибирати або змінювати вже існуючі, але й
//           видаляти, а також створювати нові елементи, після чого додавати їх в
//           документ.
//         </p>
//       </li>
//     </ul>

//     <!-- Task - 03 -->
//      <p class="task-title">Task 3</p>
//      <form class="contact-form js-contact-form">
//       <input
//         name="userName"
//         type="text"
//         class="contact-form-input js-username-input"
//         data-length="8"
//         placeholder="Your name"
//       />
//       <label class="js-policy-label">
//         <input
//           type="checkbox"
//           name="accept"
//           class="contact-form-checkbox js-policy-checkbox"
//         />
//         Я <span class="js-username-output">Anonymous</span> погоджуюсь із
//         політикою конфіденційності
//       </label>
//       <button type="submit" class="contact-form-btn js-contact-form-submit">
//         Відправити
//       </button>
//     </form>

//       <!-- Task - 04 -->
//     <p class="task-title">Task 4</p>
//       <div>
//         <div class="box"></div>
//         <button class="js-decrease" id="decrease">Зменьшити</button>
//         <button class="js-increase" id="increase">Збільшити</button>
//       </div>
//     </div>

// 2. У файл css/styles.css додайте стилі:
// /* common */
// * {
//   box-sizing: border-box;
// }

// body {
//   background-color: #fff;
//   color: #333;
//   font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
//   padding: 0;
//   margin: 0;
// }

// button {
//   cursor: pointer;
// }

// section {
//   padding: 50px 0;
//   text-align: center;
// }

// ul {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
// }

/* components */

// .task-title {
//   font-size: 20px;
//   font-style: italic;
//   font-weight: 500;
//   text-decoration: underline;
//   margin-bottom: 100px;
// }

// .container {
//   width: 1440px;
//   margin: 0 auto;
//   padding: 0px 40px;
// }

// .module-title {
//   text-align: center;
// }

// .number-container {
//   display: flex;
//   flex-wrap: wrap;
// }

// .number {
//   width: 50px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   font-weight: 700;

//   margin: 5px;
// }

// .even {
//   background-color: #8bc34a;
// }

// .odd {
//   background-color: #ffed3b;
// }

// /* form styles */
// .contact-form {
//   display: flex;
//   flex-direction: column;
//   width: 600px;
//   margin: 0 auto;
//   padding: 20px;
//   box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
// }
// .contact-form-input {
//   height: 40px;
//   border: 1px solid #cccccc;
//   padding-left: 20px;
//   margin-bottom: 20px;
// }

// .contact-form-btn {
//   margin-top: 20px;
// }

// .success {
//   outline: 3px solid greenyellow;
// }

// .error {
//   outline: 3px solid red;
// }

// span {
//   text-decoration: underline;
// }

// /* Box */
// .box {
//   width: 50px;
//   height: 50px;
//   border: 2px dashed red;
//   margin: 10px;
// }

// 3. Далі по черзі копіюйте кожне завдання в файл lesson-4.js, з переліку нижче, а після умови задачі пишіть її вирішення.

// Протягом заняття ставте всі запитання, які виникли під час роботи зі масивами, обʼєктами чи функціями. Ментор допоможе вам у разі складнощів та роз’яснить тонкощі використання вказаних типів даних та функцій.

// Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// Завдання 2:
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// Завдання 3:
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// Завдання 4:
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
