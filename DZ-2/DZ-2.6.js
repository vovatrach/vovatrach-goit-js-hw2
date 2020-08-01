// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех
//  пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не 
// пустой, необходимо посчитать сумму всех элементов массива и записать ее в 
// переменную total. Используй цикл for или for...of. После чего в консоль 
// выведи строку 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не 
// произвольный набор символов, не обязательно. Если хочешь, в случае 
// некорректного ввода, показывай alert с текстом 'Было введено не число, 
// попробуйте еще раз', при этом результат prompt записывать в массив чисел 
// не нужно, после чего снова пользователю предлагается ввести число в prompt.


let input;
const numbers = [];
let total = 0;


// input = prompt("Введите число:");
// while(input !==null){
//     if (!Number(input)) {
//         alert("Было введено не число, попробуйте еще раз");
//     } else {
//         numbers.push(parseInt(input));
//     }
//     input = prompt("Введите число:");
// }
// console.log(numbers);

// for (let number of numbers){
//     total += number;
// }
// alert(`Общая сумма чисел равна ${total} `);



// do {
//   input =  prompt("Введите число:");
//   if (Number.isNaN(+input)) {
//     alert("Было введено не число, попробуйте еще раз");
//    continue;
//   } else{
//     numbers.push(+input);
//   }
  
// }while(input !==null);

// if (numbers.length ) {
//     for (let number of numbers){
//       total += number;
//   }
//   alert(`Общая сумма чисел равна ${total} `);
  
//   }
// console.log(total);








// while(input !==null){
//   input = prompt("Введите число:");
//     if (Number.isNaN (+ input)) {
//         alert("Было введено не число, попробуйте еще раз");
//         break;
//     } else {
//         numbers.push(+input);
//     }
//   }
// console.log(numbers);
// if (numbers.length ) {
//   for (let number of numbers){
//     total += number;
// }
// alert(`Общая сумма чисел равна ${total} `);

// }








// do{
//   input = prompt("Введите число:");
// } while(input !==null);

//     if (!Number(input)) {
//         alert("Было введено не число, попробуйте еще раз");
//     } else {
//         numbers.push(Number.parseInt(input));
//        console.log(numbers);
//     }
// for (let number of numbers){
//     total += number;
// }
// alert(`Общая сумма чисел равна ${total} `);

 

// do  {
//     input = prompt ("Введите число:");
   
//     if (!Number(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     } else {
//     numbers.push(Number.parseInt(input));
//     }
//     } while (input !==null); 
//     console.log(numbers);
//  for (let number of numbers){
//         total += number;
//     }
//     alert(`Общая сумма чисел равна ${total} `);


 








const printMessage = function(message) {
  console.log(message);
};

const higherOrderFunction = function(callback) {
  const string = 'HOCs are awesome';
  callback(string);
};

higherOrderFunction(printMessage);




