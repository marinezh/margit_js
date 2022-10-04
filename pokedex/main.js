// const content = document.querySelector('.pokedex');

// let pokeData = []

// const fetchData = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
//         .then((response) => response.json())
//         .then((data) => {
//             pokeData = data.results;
//             console.log(data.results);
//             console.log(pokeData);
//             pokeCards();
//         });
// };

// // we should do fetch inside the detch to get the pictures of pokemon
// // multiple fetche at the same time - request to the google
// fetchData();

// const pokeCards = () => {
//     const cards = pokeData.map((pokemon, i) => {
//         return `<div class="card">
//   <div class="image">
//   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg" alt="#">
//   </div>
//   <h2>${pokemon.name}</h2>
// </div>`
//     })              
//     .join("");
//         content.innerHTML = cards;
    
// };
// fetchData()

const content = document.querySelector('.pokedex');
let pokeData = []
const fetchPokemon = () => {
    for (let i = 1; i <= 100; i++){  
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map((type)=> type.type.name).join(', ')
            };
            console.log(pokemon);
            displayPokemon(pokemon);
        })
    }
}


const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const cards = pokemon.map(
        (pokeman) => {
                return `<div class="card">
          <div class="image">
          <img src="${pokeman.image}" alt="#">
          </div>
          <h2>${pokeman.name}</h2>
          <p>${pokeman.type}</p>
        </div>`
            })              
            .join("");
                content.innerHTML = cards;


}
fetchPokemon()

sprites.other["official-artwork"].front_default