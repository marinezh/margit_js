const content = document.querySelector('.pokedex');

let pokeData = []

const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
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
    const cards = pokeData.map((pokemon, ) => {
        return           `<div class = "card">
        <div class="image">
        <img src="assets/pikachu-5527377_640.jpg" alt="#">
    </div>
                <h2>${pokemon.name}</h2></div>`
    })
        .join("");
    content.innerHTML = cards;
};
fetchData()