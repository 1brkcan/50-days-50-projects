const loadText = document.querySelector(".loading");
const back = document.querySelector(".bg");

let load = 0;
let int = setInterval(bluring, 30); // milisaniye
// setInterval belli bir fonksiyonu belirli bir sure icerisinde tamamlamasi icin verilir

function bluring(){
    load++

    if(load > 99){
        clearInterval(int); // islemi durdur anlamina gelir. vermezsek sonsuza kadar gider.
    }
    loadText.innerText = `${load}%`;

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    back.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

// JQuery den alinan kod örneğine göre yaptım

 function scale (number, inMin, inMax, outMin, outMax) {
     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
 }
























