const imagesContainer = document.getElementById("images");
const img = document.querySelectorAll("#images img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let interval = setInterval(play, 2000);
let idx = 0;

function play() {
    idx++;
    changeImage();

}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    }
    else if(idx < 0){
        idx = img.length - 1
    }

    imagesContainer.style.transform = `translateX(${-idx * 600}px)`
}

function reserInterval() { 
    clearInterval(interval);
    interval = setInterval(play, 2000);
}

next.addEventListener("click", () => {
    idx++;

    changeImage();
    reserInterval();
})

prev.addEventListener("click", () => {
    idx--;

    changeImage();
    reserInterval();
})














