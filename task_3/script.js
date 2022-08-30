//Make a program that asks age of the user.

// If the age is less than 18 the text “too young” is printed.
// If the age is less than 27 the text “Right age for military service” is displayed on the console.
// If the age is less than 41 the text “You are in reserve” is displayed on the console.
// If the age is less than 55 the text “You are in backup reserve” is displayed on the console.

// All other cases “too aged” is displayed on the console

// let age = prompt("Please insert your age:");
// console.log(age);

// if (age < 18) {
//   console.log("too young");
// } else if (age < 27) {
//   console.log("Right age for military service");
// } else if (age < 41) {
//   console.log("you are in reserve");
// } else if (age < 55) {
//   console.log("You are in backup reserve");
// } else {
//   console.log("too aged");
// }

const checkAge = () => {
  const age = window.prompt("How old are you?");

  if (age < 18) {
    return console.log("too young");
  } else if (age < 27) {
    return console.log("Right age for military service");
  } else if (age < 41) {
    return console.log("you are in reserve");
  } else if (age < 55) {
    return console.log("You are in backup reserve");
  } else {
    return console.log("too aged");
  }
};

checkAge();

// switch (age) {
//   case "age < 18":
//     console.log("too young");
//     break;

//   case "age < 27":
//     console.log("Right age for military service");
//     break;

//   case "age < 41":
//     console.log("you are in reserve");

// }
