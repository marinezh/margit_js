const content = document.querySelector(".pokedex");
let searchInput = document.querySelector("#search");

let pokeData = [];
let filterPoke = [];

// const getPokeType = (type) => {
//   switch (type) {
//     case "bug": 
//       return <img src = ""></img> 
//   }
// }


const fetchPokemon = () => {
  for (let i = 1; i <= 300; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = {
          name: data.name,
          id: data.id,
          gen: data.gen,
          image: data.sprites.other["official-artwork"].front_default,
          // type: data.types.map((type) => type.type.name).join(", "),
          type: data.types.map((type) => `<img class="poke_symbol" src="assets/${type.type.name}.png"
          alt="#"
      />`)
            .join(" "),
        };
        pokeData.push(pokemon);
        displayPokemon(pokeData);
      });
  }
};

const displayPokemon = (data) => {
  const cards = data
    .map(
      (pokeman) => `<div class="card">
          <div class="poke_image">
          <img src="${pokeman.image}" alt="#">
          </div>
          <h2>#${pokeman.id} ${pokeman.name}</h2>
          <div class = 'type'>${pokeman.type}</div>
         
        </div>`
    )
    .join("");

  content.innerHTML = cards;
};
fetchPokemon();

const searchFunc = () => {
  console.log(searchInput.value);

  let sort = pokeData.filter((elem) =>
    elem.name.includes(searchInput.value) || elem.type.includes(searchInput.value))
  // console.log(sort);
  displayPokemon(sort);
};


searchInput.addEventListener("input", searchFunc);
