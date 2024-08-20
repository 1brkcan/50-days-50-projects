const content = document.getElementById('content');
const speedEl = document.getElementById('speed');
const text = "I am a Computer Teacher and Front-end Developer";
let idx = 1
let speed = 300 / speedEl.value


writeText();

function writeText(){
    content.innerText = text.slice(0, idx);
    idx++;

    if (idx >= text.length){

         idx = 1; //! basa dondurur yaziyi 
        //! content.innerText = text; yaziyi durdurur
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (a) => {
    speed = 300 / a.target.value;
});




























