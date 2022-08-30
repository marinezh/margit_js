// make a programm that asks .....

const num_4 = parseFloat(prompt("please, enter a number", "0"));

if (num_4 > 0) {
  if (num_4 % 2 == 0) console.log(`number ${num_4} is even`);
  else {
    console.log(`number ${num_4} is odd`);
  }
} else {
  console.log("number is a negative");
}
