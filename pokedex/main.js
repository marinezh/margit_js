const content = document.querySelector(".pokedex");
let searchInput = document.querySelector("#search");

let pokeData = [];
let filterPoke = [];

const fetchPokemon = () => {
  for (let i = 1; i <= 50; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = {
          name: data.name,
          id: data.id,
          image: data.sprites.other["official-artwork"].front_default,
          type: data.types.map((type) => type.type.name).join(", "),
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
          <div class="image">
          <img src="${pokeman.image}" alt="#">
          </div>
          <h2>${pokeman.name}</h2>
          <p>${pokeman.id}. ${pokeman.type}</p>
        </div>`
    )
      .join("");
  
  content.innerHTML = cards;
};
fetchPokemon();

const searchFunc = () => {
  console.log(searchInput.value);

  let sort = pokeData.filter((elem) =>
    elem.name.includes(searchInput.value)
  );
  console.log(sort);

    document.querySelector("main").innerHTML = "";
    filterPoke.push(sort);
    console.log(filterPoke);
    displayPokemon(sort);
    
};

// if (searchInput.value == "") {
//   content.innerHTML = displayPokemon(pokeData);
// } else {
//   content.innerHTML = sort;
// }

searchInput.addEventListener("input", searchFunc);
