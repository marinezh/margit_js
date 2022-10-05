const form = document.querySelector("form");
const customer = document.querySelector("#name");
const size = document.querySelectorAll('[name="size"]');
const toppings = document.querySelectorAll("input[type=checkbox]");
const delivery = document.querySelector("#delivery");
const order = document.querySelector("#order");


const takeOrder = (event) => {
  event.preventDefault();
  let customerName = customer.value;
  let sizeResult = "";
  let toppingsResult = [];
  let deliveryResult = delivery.options[delivery.selectedIndex].value;
  let price = 0;

  size.forEach((item) => {
    if (item.checked) {
      sizeResult = item.value;
    }
  });

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
    if (item.checked) {
      toppingsResult.push(item.value);
    }
  });

  if (toppingsResult.length > 4) {
    price += (toppingsResult.length - 4) * 0.5;
  }

  if (deliveryResult == "home") {
    price += 5;
  }
  order.innerHTML = `Thank you for your order, <span>${customerName}</span>. <br>
  You ordered pizza for <span>${sizeResult}</span>. <br>
  Toppings which you chose : <span>${toppingsResult.join(", ")}</span>. <br>  
  Delivery method is : <span>${deliveryResult}</span>. <br>
  Total price is : <span>${price} euro</span>.`;
  
  form.reset();
};

form.addEventListener("submit", takeOrder);
