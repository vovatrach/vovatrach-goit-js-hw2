const formatString = function(string) {
// return (`${string.leng <= 40} ${string.slice(0,40)} ${'...'}`)

return  string.length <= 40 ? string : `${string.slice(0,40)}... `

 





        // твой код
      //  if (string.length <= 40){
      //    return string;
      //  } else {
      //    return string.slice(0,40) + '...'
      //  };
       
    
        // let resoult
        // string.length <= 40 ? resoult=string : resoult=string.slice(0,40)+'...'
        // return resoult
};
        // * Вызовы функции для проверки работоспособности твоей реализации.
        // */
       console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
       // вернется оригинальная строка
       
       console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
       // вернется форматированная строка
       
       console.log(formatString('Curabitur ligula sapien.'));
       // вернется оригинальная строка
       
       console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
     



//let resoult
// if (string.length <= 40){
//   resoult=string
// }else{
//   resoult=string.slice(0,40)+'...'
// }
//return resoult


