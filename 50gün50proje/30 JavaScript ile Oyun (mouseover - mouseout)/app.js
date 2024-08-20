const container = document.getElementById('container');
const color = ["#e74c3c", "#8e44ad", "#3498ad", "#ebe7e22", "#2ecc71", "#fff"];
const clear = document.querySelector("#clear");
const SQUARE = 2508;

for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    clear.addEventListener("click", () => clearDiv(square));

}

function setColor(div) {
    //console.log(div);
    const randomColor = getRandomColor()
    div.style.backgroundColor = randomColor;
    div.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function getRandomColor(){
    return color[Math.floor(Math.random() * color.length)];
}

function removeColor(div) {
    div.style.backgroundColor = "#111";
    div.style.boxShadow = "0 0 2px #000";
}


function clearDiv(div) {

    div.style.backgroundColor = "#111";
    div.style.boxShadow = "0 0 2px #000";
}



const dark = document.getElementById("dark");

dark.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")){
        dark.innerHTML = "Dark"
    }
    else{
        dark.innerHTML = "Light";
    }

})















