// // Завдання 1:
// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector('body');
// console.log('🚀 ~ body:', body);
// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleById = document.querySelector('#title');
// console.log('🚀 ~ titleById:', titleById);
// // 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector('.list');
// console.log('🚀 ~ list:', list);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopic = document.querySelectorAll('[data-topic]');
// console.log('🚀 ~ dataTopic:', dataTopic);
// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// // const dataTopicFirst = dataTopic[0];
// const dataTopicFirst = document.querySelector('[data-topic');
// console.log('🚀 ~ dataTopicFirst:', dataTopicFirst);
// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// // const dataTopicLast = list.lastElementChild;
// const dataTopicLast = dataTopic[dataTopic.length - 1];
// console.log('🚀 ~ dataTopicLast:', dataTopicLast);
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const headerSibling = document.querySelector('h1').nextElementSibling;
// console.log('🚀 ~ headerSibling:', headerSibling);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const header3 = document.querySelectorAll('h3');
// console.log('🚀 ~ header3:', header3);
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// header3.forEach(header => {
//   header.classList.add('active');
// });
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navigation = document.querySelector('[data-topic="navigation"]');
// console.log('🚀 ~ navigation:', navigation);
// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// // navigation.setAttribute('style', 'background-color: yellow');
// navigation.style.backgroundColor = 'yellow';
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const changeTxt = navigation.querySelector('p');
// changeTxt.textContent = 'Я змінив тут текст!';
// console.log('🚀 ~ changeTxt:', changeTxt);
// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const manipulation = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log('🚀 ~ manipulation:', manipulation);
// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// manipulation.style.backgroundColor = 'lightblue';
// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const headerCompleted = document.querySelector('.completed');
// console.log('🚀 ~ headerCompleted:', headerCompleted);
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const parentCompleted = headerCompleted.parentElement;
// console.log('🚀 ~ parentCompleted:', parentCompleted);
// parentCompleted.remove();
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const header1 = document.querySelector('h1');
// console.log('🚀 ~ header1:', header1);
// const createdPDomEl = document.createElement('p');
// createdPDomEl.textContent = "Об'єктна модель документа (Document Object Model)";
// console.log('🚀 ~ createdPDomEl:', createdPDomEl);
// header1.after(createdPDomEl);
// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// // const newListEl = document.createElement('li');
// // newListEl.dataset.topic = 'inner-html';
// // console.log('🚀 ~ newListEl:', newListEl);
// // const newHeader3 = document.createElement('h3');
// // console.log('🚀 ~ newHeader3:', newHeader3);
// // newHeader3.textContent = 'Властивість innerHTML';
// // const decriptionP = document.createElement('p');
// // decriptionP.textContent =
// //   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// // console.log('🚀 ~ decriptionP:', decriptionP);
// // newListEl.append(newHeader3, decriptionP);
// // list.append(newListEl);
// // console.log('🚀 ~ list:', list);
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const markup = `
// <li data-topic = 'incert-adjacent-html'>
//   <h3>Властивість innerHTML</h3>
//   <p>'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу'</p>
// </li>
// `;
// list.insertAdjacentHTML('beforeend', markup);
// console.log('🚀 ~ list:', list);
// // 20 - очисти список
// const listElements = list.querySelectorAll('li');
// console.log('🚀 ~ listElements:', listElements);
// listElements.forEach(item => item.remove());
// console.log('🚀 ~ list:', list);

// // Завдання 2:
// // Створіть контейнер div (з класом number-container) в HTML-документі
// // та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// // числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// // Парні числа повинні мати зелений фон (додати клас even),
// // Непарні числа - жовтий фон (додати клас odd).
// const container = body.querySelector('.container');
// const numberContainer = document.createElement('div');
// numberContainer.classList.add('number-container');
// const containerChildren = container.children;
// console.log('🚀 ~ containerChildren:', containerChildren);
// container.insertBefore(numberContainer, containerChildren[2]);
// console.log('🚀 ~ numberContainer:', numberContainer);
// for (let i = 0; i < 100; i++) {
//   const numberContainerEl = document.createElement('div');
//   numberContainerEl.classList.add('number');

//   const randomNumber = () => Math.floor(Math.random() * 100) + 1;

//   numberContainerEl.textContent = randomNumber();

//   if (Number(numberContainerEl.textContent) % 2 === 0) {
//     numberContainerEl.classList.add('even');
//   } else {
//     numberContainerEl.classList.add('odd');
//   }

//   numberContainer.append(numberContainerEl);
// }

// // Завдання 3:
// // Form Events, Input, Focus, Blur and Submit.

// // Використовуй шаблон форми з файлу html.

// const form = document.querySelector('.js-contact-form');
// const input = document.querySelector('.js-username-input');
// const policyCheckbox = document.querySelector('.js-policy-checkbox');
// const output = document.querySelector('.js-username-output');
// const submitBtn = document.querySelector('.js-contact-form-submit');

// // 1 - При події `input`, якщо користувач ввів в поле більше
// // 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// // то клас `error`

// input.addEventListener('input', event => {
//   event.preventDefault();
//   const value = input.value.trim();
//   console.log('🚀 ~ value:', value);

//   if (value.length >= 6) {
//     input.classList.add('success');
//     input.classList.remove('error');
//   } else {
//     input.classList.add('error');
//     input.classList.remove('success');
//   }

//   if (value) {
//     output.textContent = value;
//   } else {
//     output.textContent = 'Anonymous';
//   }
//   console.log('🚀 ~ input:', input);
// });

// // 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener('focus', event => {
//   const value = input.value.trim();
//   console.log('🚀 ~ value:', value);

//   if (value.length >= 6) {
//     input.style.outline = '3px solid green';
//   } else {
//     input.style.outline = '3px solid red';
//   }
//   console.log('🚀 ~ input:', input);
// });

// // 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener('blur', event => {
//   const value = input.value.trim();
//   console.log('🚀 ~ value:', value);

//   if (value.length >= 6) {
//     input.style.outline = '3px solid lime';
//   } else {
//     input.style.outline = '3px solid red';
//   }
//   console.log('🚀 ~ input:', input);
// });

// // 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// // Дістань данні з інпуту і чек боксу, зроби перевірку,
// // що інпут не порожній, також, що нажатий чек бокс у положення true,
// // якщо користувач все виконав вірно, збери данні (userName)
// // у обьект і виведи у консоль. У разі, якщо користувач не виконав
// // одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// // ім`я користувача у span, замість слова "Anonymous".
// // Якщо користувач ввів ім`я, а потім видалив, зроби так,
// // щоб на місце повернулось дефолтне знаяення "Anonymous".
// // При відправці форми, очисти інпут, верни чек бокс у положення
// // false, верни дефолтне значення "Anonymous" у span.

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const userName = input.value.trim();
//   console.log('🚀 ~ userName:', userName);
//   const isChecked = policyCheckbox.checked;
//   let userData;

//   if (!userName) {
//     alert('Введіть імʼя');
//     return;
//   }

//   if (!isChecked) {
//     alert('Потрібно погодитись із політикою конфіденційності');
//     return;
//   }
//   if (userName.length >= 6) {
//     userData = {
//       userName: userName,
//     };
//   } else {
//     alert('Мінімум 6 символів в імені');
//   }
//   console.log(userData);

//   input.value = '';
//   policyCheckbox.checked = false;
//   output.textContent = 'Anonymous';
//   input.classList.remove('success', 'error');
//   input.style.outline = 'none';
// });

// // Завдання 4:
// // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const decrBtn = document.querySelector('.js-decrease');
const incrBtn = document.querySelector('.js-increase');
const box = document.querySelector('.box');
const styles = getComputedStyle(box);

decrBtn.addEventListener('click', () => {
  const width = parseInt(styles.width);
  const height = parseInt(styles.height);

  if (width <= 20 || height <= 20) return;

  box.style.width = width - 20 + 'px';
  box.style.height = height - 20 + 'px';

  const currentWidth = parseInt(styles.width);
  const currentHeight = parseInt(styles.height);

  console.log('🚀 ~ currentWidth:', currentWidth);
  console.log('🚀 ~ currentHeight:', currentHeight);
});

incrBtn.addEventListener('click', () => {
  const width = parseInt(styles.width);
  const height = parseInt(styles.height);

  box.style.width = width + 20 + 'px';
  box.style.height = height + 20 + 'px';

  const currentWidth = parseInt(styles.width);
  const currentHeight = parseInt(styles.height);

  console.log('🚀 ~ currentWidth:', currentWidth);
  console.log('🚀 ~ currentHeight:', currentHeight);
});
