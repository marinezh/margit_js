function CalcFunc() {
  const price = Number(document.getElementById("price").value);
  const money = Number(document.querySelector("#money").value);

  const answer = document.querySelector("#answer");
  let text;

  const amount = Math.floor(money / price);

  console.log("price", price);
  console.log("money", money);
  console.log(amount);

  if (amount > 10) {
    text = `You could get about ${amount} leters, good, now you can escape.`;
  } else {
    text = `You could get about ${amount} litters.Sorry , now you have to stay.`;
  }

  answer.textContent = text;
}
