const formatString = function(string) {
        // твой код
        if (string.length <= 40) {
            return string;
        } else {
            let inString = "";
            for (let i = 0; i < 40; i += 1) {
                let character = string.charAt(i);
                inString += character;
            }
             inString += "...";
             return inString;
    
    
        } 
      };
      
      /*
       * Вызовы функции для проверки работоспособности твоей реализации.
       */
      console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
      // вернется оригинальная строка
      
      console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
      // вернется форматированная строка
      
      console.log(formatString('Curabitur ligula sapien.'));
      // вернется оригинальная строка
      
      console.log(
        formatString(
          'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
        ),
      );
    