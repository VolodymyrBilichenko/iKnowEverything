//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   new Promise((resolve) => {
//     setInterval(() => resolve("Hello world"), 2000);
//   }).then(console.log);
// }
// greet();

/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

// function checkValue(value) {
//   return new Promise((resolve, reject) => {
//     if (!value || isNaN(value)) reject("error");
//     if (value % 2 === 0) setTimeout(() => resolve("even"), 1000);
//     setTimeout(() => resolve("odd"), 2000);
//   });
// }

// const value = prompt("Введіть значення!");
// checkValue(value)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(console.log);

/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

// function countWithDelay(delay, time, interval) {
//   let count = 0;
//   function logCount() {
//     count += 1;
//     if (count === time) return;
//     setTimeout(logCount, interval);
//     console.log(count);
//   }
//   createPromise(delay, logCount);
// }
// function createPromise(delay, callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), delay);
//   }).then(() => {
//     callback();
//   });
// }
// countWithDelay(3000, 5, 1000);

//TODO:====================05==========================
/**
 * Функція startTimer повинна логувати кожен елемент масиву один раз на секунду.
 * Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку
 * поки не дійде до першого елемента, потім зупинити процес.
 */

// function startTimer(arr) {
//   let index = 0;
//   let reversed = false;

//   const intervalID = setInterval(() => {
//     console.log(arr[index]);

//     if (!reversed) {
//       index += 1;
//       if (index === arr.length) {
//         index -= 1;
//         reversed = true;
//       }
//     } else {
//       index -= 1;
//       if (index < 0) {
//         console.log("Finish");
//         clearInterval(intervalID);
//       }
//     }
//   }, 1000);
// }
// startTimer(["a", "b", "c", "d"]);
