const carInfo = document.querySelector("#car_info");
const number = document.querySelector("#number");
const maker = document.querySelector("#maker");
const model = document.querySelector("#model");
const owner = document.querySelector("#owner");
const price = document.querySelector("#price");
const color = document.querySelector("#color");

const searchInfo = document.querySelector("#search_info");
const searchInput = document.querySelector("#input_search");
const result = document.querySelector("#result");

let carsDatabase = [];

const databaseCreation = (e) => {
    e.preventDefault();

    let car = {
        number: number.value,
        maker: maker.value,
        model: model.value,
        owner: owner.value,
        price: price.value,
        color: color.value,
    }

    carsDatabase.push(car)

    // table with cars database creation.
    let table = document.querySelector("table")
    let row = table.insertRow();
    row.insertCell().textContent = car.number;
    row.insertCell().textContent = car.maker;
    row.insertCell().textContent = car.model;
    row.insertCell().textContent = car.owner;
    row.insertCell().textContent = car.price;
    row.insertCell().textContent = car.color;
}

// listener to the form which create database
carInfo.addEventListener("submit", databaseCreation)

const carSearchingFunc = (e) => {
    e.preventDefault();

    const output = carsDatabase.find(({ number }) => number === searchInput.value);

    if (output === undefined) {
        result.textContent = `License number ${searchInput.value} not found`;
    } else {
        result.textContent = `Licence number ${output.number} is ${output.maker} 
     ${output.model} and it belongs to ${output.owner}.`;
    }
}
// listener to the search
searchInfo.addEventListener("submit", carSearchingFunc)




