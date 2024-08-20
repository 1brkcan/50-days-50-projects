const poke_container = document.querySelector(".container");
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");


const pokemon_count = 151

const bg_color = {
    grass: '#8BD369',
    fire: '#FF603F',
    water: '#3399FF',
    bug: '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA' ,
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: '#E2C56A',
    fairy: '*F1A8EC',
    psychic: '#FF6EA4',
    fighting: '#C56E5C',
    rock: '#C5B679',
    dragon: '#7766EE',
    ice: '#66CCFF'
    }

//! Inputun açılış ve kapanış etkinliği
searchBtn.addEventListener('click', () => {
    search.classList.toggle('active');
});

 //! Inputa girilen degere gore pokemon filtreleme
searchInput.addEventListener("input", (e) => {
    const searchValue = searchInput.value.toLowerCase();
    const pokemonNames = document.querySelectorAll(".poke-name")
    pokemonNames.forEach((pokemon) => {
        if (pokemon.innerHTML.toLowerCase().includes(searchValue)) {
            pokemon.parentElement.parentElement.style.display = "block";

        }
        else{
            pokemon.parentElement.parentElement.style.display = "none";

        }

    })
})

//! Api ile pokemonlari cekme

const fetchPokemons = async() =>{
    for(let i = 1; i<pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async(id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json()
    createPokemonCard(data)
}



//! Pokemon cards Olusturma

const createPokemonCard = (pokemon) =>{
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add("pokemon");

    const pokemonId = pokemon.id.toString().padStart(3, "0"); //! 3 basamakli olsun bos basamaklar 0 ile tamamlansin demektir padStart
    const pokemonType = pokemon.types[0].type.name
    const pokemonBG = bg_color [pokemonType]
    pokemonDiv.style.backgroundColor = `${pokemonBG}`
    


    const pokemonDivInnerHTML =
    `  
        <div class="image-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="First image">
        </div>
        <div class="poke-info">
            <small class="poke-id">#${pokemonId}</small>
            <h3 class="poke-name">${pokemon.name}</h3>
            <div class="small">

                <small class="poke-exp"><i class="fa fa-solid fa-flask"></i> ${pokemon.base_experience} Exp</small>
                <small class="poke-weight"><i class="fa fa-solid fa-scale-balanced"></i>${pokemon.weight}</small>

            </div>
            <div class="poke-type">
                <i class="fa-brands fa-uncharted"></i> ${pokemonType}
            </div>
        </div>
    `
    pokemonDiv.innerHTML = pokemonDivInnerHTML
    poke_container.appendChild(pokemonDiv)
    
}

fetchPokemons();

































