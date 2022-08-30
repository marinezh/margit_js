// Make a program that asks for three numbers from the user. The program prints out the sum of the numbers if any of the numbers are positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, the text “only negatives” is printed. Handle zero as positive in this assignment.

const num_1 = +prompt("please, enter number 1");
const num_2 = +prompt("please, enter number 2");
const num_3 = +prompt("please, enter number 3");

if (num_1 >= 0 || num_2 >= 0 || num_3 >= 0) {
  console.log(num_1 + num_2 + num_3);
}

if (num_1 >= 0 && num_2 >= 0 && num_3 >= 0) {
  console.log(num_1 * num_2 * num_3);
}

if (num_1 <= 0 && num_2 <= 0 && num_3 <= 0) {
  console.log("only negatives");
}
