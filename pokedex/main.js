const content = document.querySelector(".pokedex");
const searchInput = document.querySelector("#search");
const buttons = document.querySelectorAll(".btn");

let pokeData = [];
let filterPoke = [];

// const getPokeType = (type) => {
//   switch (type) {
//     case "bug":
//       return <img src = ""></img>
//   }
// }

const getGen = (id) => {
  if (id < 150) return 1;
  else if (id < 300) return 2;
  else return 3;
};

const getImg = (sprites) => {
  let res = sprites.other.dream_world.front_default;
  if (!res) res = sprites.other["official-artwork"].front_default;
  return res;
};

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
              ) => `<img class="poke_symbol" src="assets/${type.type.name}.png"
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

  let sort = pokeData.filter(
    (elem) =>
      elem.name.includes(searchInput.value) ||
      elem.type.includes(searchInput.value)
  );
  // console.log(sort);
  displayPokemon(sort);
};

searchInput.addEventListener("input", searchFunc);

buttons.forEach((button, i) =>
  button.addEventListener("click", () => {
    console.log(i, ' clicked');
    let sort;
    if (!i) sort = pokeData;
    else {
      sort = pokeData.filter((pokemon) => (pokemon.gen === i));
    }
    displayPokemon(sort);
  })
);