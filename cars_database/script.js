const form = document.querySelector("form")

console.log(form);



const databaseCreation = (e) => {
    e.preventDefault();


    let number = document.querySelector("#number");
    console.log(number.value);

    let maker = document.querySelector("#maker");
    console.log(maker.value);

    let model = document.querySelector("#model");
    console.log(model.value);

    let owner = document.querySelector("#owner");
    console.log(owner.value);

    let price = document.querySelector("#price");
    console.log(price.value);

    let color = document.querySelector("#color");
    console.log(color.value);

    let car = {
        number: `${number.value}`,
        maker: `${maker.value}`,
        model: `${model.value}`,
        owner: `${owner.value}`,
        price: `${price.value}`,
        color: `${color.value}`
    }
    console.log(car);

    let carDatabase = []
    carDatabase.push(car)

    carDatabase.forEach(car => {
        carDatabase += car
    });

    console.table(carDatabase);




}

form.addEventListener("submit", databaseCreation)


