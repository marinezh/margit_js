const form = document.querySelector("form");

const customer = document.querySelector("#name");
console.log(customer);

const size = document.querySelectorAll('[name="size"]');

const toppings = document.querySelectorAll("input[type=checkbox]");

const delivery = document.querySelector("#delivery");

const order = document.querySelector("#order");

console.log(delivery);

console.log(size);

const takeOrder = (event) => {
  event.preventDefault();

  let customerName = customer.value;
  let sizeResult = "";
  let toppingResult = [];
  let deliveryResult = delivery.options[delivery.selectedIndex].value;
  let price = 0;

  size.forEach((item) => {
    if (item.checked) {
      sizeResult = item.value;
    }
  });

  if (toppingResult.length > 4) {
    price += (toppingResult.length - 4) * 0.5;
  }

  if (deliveryResult == "home") {
    price += 5;
  }

  switch (sizeResult) {
    case "two":
      price += 7.5;
      break;

    case "four":
      price += 10.5;
      break;

    case "six":
      price += 12.5;
      break;

    case "eight":
      price += 15.5;
      break;
    default:
  }

  toppings.forEach((item) => {
    toppingResult.push(item.value);
  });

  order.textContent = `Name: ${customerName}, Size: ${sizeResult}, Toppings: ${toppingResult.join(
    ", "
  )}`;

  console.log(customerName);
  console.log(sizeResult);
  console.log(toppingResult);
  console.log(deliveryResult);
  console.log(price);
};

form.addEventListener("submit", takeOrder);
