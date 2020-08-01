// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. 
//  Если нашли зарещенное слово то функция возвращает true, если запрещенных 
//  слов нет функция возвращает false. Слова в строке могут быть в
//   произвольном регистре.



const checkForSpam = function(message) {
        // твой код
    //    1)
        let resault
        message.toLowerCase().includes("spam") ? resault = true: resault = false
        message.toLowerCase().includes("sale") || resault ? resault = true: resault = false
        return resault
      };
        
        //2) message = message.toLowerCase();
        // if (message.indexOf("spam") !== -1) {
    
        // return true;
        // }else if (message.indexOf("sale") !== -1){
        //     return true;
        // } else {
        //     return false;
        // }
        
      
      /*
       * Вызовы функции для проверки работоспособности твоей реализации.
       */
      console.log(checkForSpam('Latest technology news')); // false
      
      console.log(checkForSpam('JavaScript weekly newsletter')); // false
      
      console.log(checkForSpam('Get best sale offers now!')); // true
      
      console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
    