// const logItems = function(array) {
//     console.log(array);

//     for(let i = 0; i < array.length; i ++) {
//         console.log(i + 1 + "-" + array [i]);
//     }
// };

// logItems(["Mango","Poly","Ajax","Lux","Jay","Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
 

// №2

// const calculateEngravingPrice = function(message, pricePerWord) {
//     let arrey = message.split (" ");
//     return arrey.length * pricePerWord;
// };
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',
// 10,),);

// console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,),);

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),); 

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),);



// №3 


// "use strict";

// const findLongestWord = function (string) {
//   let arrey = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < arrey.length; i++) {
//     if (longestWord.length < arrey[i].length) {
//       longestWord = arrey[i];
//     }
//   }

//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// №4

// const formatString = function(string) {

// }
  
// \

// проверяем правда /лож{что делаем}  while (){}
// {что делаем}проверяем правда /лож  do{}while ()w

// let userInput=null;//inudndifened
// while (userInput!==null) {
//      userInput = prompt('экакой то текст')
//     } 

// const userInput = alert('экакой то текст')= prompt('введите данные');

//  for (let i=0; i<10; i++){
//      //чтоо  то делш
//  }



// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );




// const logItems = function(blabla) {
//     for (let i = 0; i < blabla.length; i++)
//     // '1 - Mango''1 - Mango'
//     console.log(i  + 1+  " - " + blabla[i]);
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//   logItems(['kzkzxk', 'lilil']);
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// 22222222222!!!!!!!!!!

// const calculateEngravingPrice = function(message, pricePerWord) {
//     // твой код
//     let arrayOfWords = message.split(" ");
//     return arrayOfWords.length * pricePerWord;
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120


  // 333333333333333

  // const findLongestWord = function(string) {
  //   // твой код
  //   let word = string.split (" ");
  //   let maxWord = ("");
  //   for (let i = 0; i < word.length; i++) {
  //     if (maxWord.length < word[i].length); {
  //        maxWord = word[i];
  //             }
  //         }
  //         return maxWord;
  
  // /*
  //  * Вызовы функции для проверки работоспособности твоей реализации.
  //  */
  // console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  // // console.log(findLongestWord('Google do a roll')); // 'Google'
  
  // // // console.log(findLongestWord('May the force be with you'));  







//   444444444444444444444444



// const formatString = function(string) {
//     // твой код
//     if (string.length <= 40) {
//         return string;
//     } else {
//         let inString = "";
//         for (let i = 0; i < 40; i += 1) {
//             let character = string.charAt(i);
//             inString += character;
//         }
//          inString += "...";
//          return inString;


//     } 
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // вернется оригинальная строка
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // вернется форматированная строка
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // вернется оригинальная строка
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );




// const checkForSpam = function(message) {
//     // твой код
//     message = message.toLowerCase();
//     if (message.indexOf("spam") !== -1) {

//     return true;
//     }else if (message.indexOf("sale") !== -1){
//         return true;
//     } else {
//         return false;
//     }
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



// 6666666666666

// let input;
// const numbers = [];
// let total = 0;

// input = prompt("Введите число:");
// while(input !==null){
//     if (!Number(input)) {
//         alert("Было введено не число, попробуйте еще раз");
//     } else {
//         numbers.push(Number.parseInt(input));
//     }
//     input = prompt("Введите число:");
// }
// console.log(numbers);

// for (let number of numbers){
//     total += number;
// }
// alert(`Общая сумма чисел равна ${total} `);