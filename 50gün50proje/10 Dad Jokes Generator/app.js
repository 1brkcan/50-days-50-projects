const buton = document.getElementById('jokeBtn');
const joke = document.getElementById('joke');


buton.addEventListener('click', generateJoke);



generateJoke();

//! ASYNC

async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const res  = await fetch("https://icanhazdadjoke.com/", config);

    const data = await res.json();

    joke.innerHTML = data.joke;

}





//! Then Olan yontem
// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {
//         // console.log(data);
//         joke.innerHTML = data.joke;
//     })
// }