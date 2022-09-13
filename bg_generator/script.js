const form = document.querySelector("form");

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");

let direction = document.querySelectorAll('input[name="direction"]');
console.log(direction);
let text = document.querySelector("p");

const setGradient = (e) => {
  e.preventDefault();
  let selectedValue;

  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value
    }
  }

  let gradient = `Linear-gradient(to ${selectedValue}, ${color1.value}, ${color2.value})`;

console.log(gradient);

document.body.style.background = gradient;
text.textContent = gradient + ';';

};



form.addEventListener('change', setGradient);
