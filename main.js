const bars =  document.querySelectorAll('.progress');    // получаем все прогрессбары
bars.forEach(item =>{                                    //пребираем все бары
    let value = item.id;                                 // получем значение прогресса
    let contador = 0;                                    //counter to know how many seconds have passed
    let interval = setInterval(function(){               //interval to know how many seconds have passed
        item.style.width = contador + "%";               //width of the progress bar
        if (contador == value){                          //if the counter is equal to the value of the progress bar
            clearInterval(interval);                     //stop the interval
        }
        contador++;                                      //increment the counter
    },8);
})