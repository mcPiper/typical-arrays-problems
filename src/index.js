
exptap.min = function min (array) {
    if (arguments.length>0){
        if (array.length>0) {
          return Math.min.apply(null,array);
        }
      }
      return 0;
    
}

exptap.max = function max (array) {
    if (arguments.length>0){
        if (array.length>0) {
          return Math.max.apply(null,array);  /* apply добавляет переменную в функцию. вся запись шаблон наиболее простого решения поиска в массиве больше меньше значения */
        }
      }
      return 0;    
}

exptap.avg = function avg (array) {  
    if (arguments.length>0){
        if (array.length>0) {
          let sum=0;
          for (let i=0; i<array.length;i++){     /* сложение всех элементов массива */
            sum+=array[i];
          }
          return sum/array.length;
        }
      } 
      return 0;
    
}
