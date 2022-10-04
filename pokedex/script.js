let gen = [
    {limit: 151, offset: 0},
    {limit: 100, offset: 151},
    {limit: 135, offset: 251},
    {limit: 151, offset: 0},
    {limit: 151, offset: 0},
    {limit: 151, offset: 0},
    {limit: 151, offset: 0},
]

const content = document.querySelector('.pokedex');

let pokeData = []

const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then((response) => response.json())
        .then((data) => {
            pokeData = data.results;
            console.log(data.results);
            console.log(pokeData);
            pokeCards();
        });
};

// we should do fetch inside the detch to get the pictures of pokemon
// multiple fetche at the same time - request to the google
fetchData();

const pokeCards = () => {
    const cards = pokeData.map((pokemon, i) => {
        return `<div class="card">
  <div class="image">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg" alt="#">
  </div>
  <h2>${pokemon.name}</h2>
</div>`
    })              
    .join("");
        content.innerHTML = cards;
    
};
fetchData()