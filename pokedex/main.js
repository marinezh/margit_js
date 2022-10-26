const content = document.querySelector(".pokedex");
const searchInput = document.querySelector("#search");
const buttons = document.querySelectorAll(".btn");

let pokeData = [];

// define the generation number
const getGen = (id) => {
  if (id < 150) return 1;
  else if (id < 251) return 2;
  else if (id < 386) return 3;
  else if (id < 493) return 4;
  else if (id < 649) return 5;
  else if (id < 721) return 6;
  else if (id < 809) return 7;
  else if (id < 905) return 8;
};

// get png pictures
const getImg = (sprites) => {
  let res = sprites.other.dream_world.front_default;
  if (!res) res = sprites.other["official-artwork"].front_default;
  return res;
};

// fetching pokemons from API
const fetchPokemon = () => {
  for (let i = 1; i <= 905; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let gen = getGen(data.id);
        let img = getImg(data.sprites);
        const pokemon = {
          name: data.name,
          id: data.id,
          gen: gen,
          image: img,
          /* image: data.sprites.other["official-artwork"].front_default, */
          // type: data.types.map((type) => type.type.name).join(", "),
          type: data.types
            .map(
              (
                type
              ) => `<img class="type_symbol" src="assets/${type.type.name}.png"
          alt="#"
      />`
            )
            .join(" "),
        };
        pokeData.push(pokemon);
        displayPokemon(pokeData);
      });
  }
};
// pokemon card creation
const displayPokemon = (data) => {
  const cards = data
    .map(
      (pokeman) => `<div class="card">
          <div class="poke_image">
          <img class="shake" src="${pokeman.image}" alt="#">
          </div>
          <h2>#${pokeman.id} ${pokeman.name}</h2>
          <div class = 'shake type'>${pokeman.type}</div>
          <div class = 'shake gen'>${pokeman.gen}</div>
        </div>`
    )
    .join("");

  content.innerHTML = cards;
};
fetchPokemon();

// search function by name and by type
const searchFunc = () => {
  console.log(searchInput.value);

  let sort = pokeData.filter(
    (elem) =>
      elem.name.includes(searchInput.value) ||
      elem.type.includes(searchInput.value)
  );
  // console.log(sort);
  displayPokemon(sort);
};

searchInput.addEventListener("input", searchFunc);


// search function by generation
buttons.forEach((button, i) =>
  button.addEventListener("click", () => {
    // console.log(i, ' clicked');
    let sort;
    if (!i) sort = pokeData;
    else {
      sort = pokeData.filter((elem) => (elem.gen === i));
    }
    displayPokemon(sort);
  })
);