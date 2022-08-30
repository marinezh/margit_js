const hourlySalary = parseFloat(
  prompt("please, enter your hourly salary", "0")
);
const hoursQuant = parseFloat(
  prompt("please, enter how many hour do your work per day", "0")
);
let extra2 = hoursQuant * (hourlySalary / 2);
let extra3 = hourlySalary * 2;

if (hoursQuant === 7) {
  console.log(hourlySalary * hoursQuant);
} else if (hoursQuant === 9) {
  console.log(hourlySalary * hoursQuant + extra2);
} else if (hoursQuant > 9) {
  console.log(hourlySalary * hoursQuant + extra2 + extra3);
}
