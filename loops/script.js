// for (let number = 0; number <= 10; number++) {
//   console.log("smth", number);
//   console.log("smth " + number); // plus turns number to the string
// }

// for (let number = 0; number <= 100; number += 2) {
//   console.log("smth", number);
// }

// for (let current = 0; current <= 25; current++) {
//   if (current % 7 == 0) {
//     console.log(current);
//   }
// }

// var s = "";
// for (var i = 1; i < 11; i += 1) {
//   s += i + " ";
//   console.log(s);
// }
/////////////////////////////////////////

//tasks

//1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

// for (let num = 1; num < 100; num++) {
//   if (num % 2 != 0) {
//     console.log(num);
//   }
// }
// // 2 version
// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
// }

//2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

// let result1 = "";
// for (let y = 98, x = 2; x <= 98, y < 0; x = x + 2, y = y - 2) {
//   result1 = result1 + x + " " + y + " ";
// }
// console.log(result1);

// // second version

// let result2 = "";
// let end = 98;

// for (let i = 2; i < 100; i += 2) {
//   result2 += " " + i + " ";
//   result2 += " " + end + " ";
//   end -= 2;
// }

// console.log(result2);

// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

// let dist, time;
// while (dist != 0) {
//   if (dist === 0) {
//     break;
//   }
//   dist = +prompt("please, enter the distance");
//   time = +prompt("please, enter the time");
//   console.log(dist / time);
// }

// second version
// do {
//   dist = +prompt("please, enter the distance");
//   time = +prompt("please, enter the time");
//   console.log(dist / time);
// } while (dist != 0);

// third version

// let distance, time1 ;

// while (distance != 0) {
//   distance = +prompt("please, enter the distance");
//   if (distance==0){
//     console.log('distance 0- game over')
//     break;
//   }

//   if (distance==0)
// }
// should figure it out

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

// let it1 = 0
// let num2
// let result = 0
// do {
//   num2 = +prompt('please, give the number')
//   it1++;
//   console.log(it1);
//   if (num2 % 2 === 0) {
//     result = result + it1

//   }
// } while (it1 != 4)

// console.log(result);
// not yet

// let even = 0;
// for (let counter = 0; counter < 5; counter++) {
//   let input = +prompt("enter the number");
//   if (input % 2 == 0) {
//     even++;
//   }
// }
// console.log("thera was,", even, "even numbers ");

// 5. Make a program that 1asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

// let it = 0;
// let num1;
// let sum = 0;
// do {
//   num1 = +prompt("please, give the number:");
//   sum = sum + num1;
//   it++;

//   console.log(it);
// } while (num1 != 0);
// console.log(sum);
// console.log("averagesum:", sum / (it - 1));

//6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

// let counter3 = 0;
// let sum3 = 0;
// do {
//   let input = +prompt("please, give the number");
//   sum3 += input;
//   counter3++;
// } while (counter3 != 5);

// console.log("average of the numbers is:", sum3 / counter3);

// enter a digit #${counter} - try it

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// let num4
// count = 0
// let answer = prompt("Do you want to continue giving numbers?(y/n)");

// if (answer === "y") {
//   do (num4)
// } else if (answer === "n") {
//   console.log("program ends");

// }

// do {num4 = +prompt("please, give the number:");

// } while ()

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

// let num5 = +prompt("How many numbers do you want to give?:");
// let it5 = 0;

// let min = num5;
// e = 
// do {
//   let num6 = +prompt("please give your numbers:");
//   it5++;
//   if (min < num5)
// } while (it5 != num5);


let min = o;
let input = +prompt("How many numbers do you want to give?:");
for (let n = 0; n < input, n++) {


}
// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
