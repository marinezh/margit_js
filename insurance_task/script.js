const form = document.querySelector("form");

const customer = document.querySelector("#name");

const age = document.querySelector("#age");

const health = document.querySelectorAll(".health")

const habits = document.querySelectorAll(".habits")

const result = document.querySelector("#result")


const riskCalc = (e) => {
  e.preventDefault();

  let riskScore = 500;
  let customerName = customer.value;
  let customerAge = age.value;
  let healthResult = [];
  let habbitsResult = [];


  if (customerAge < 18) {
    riskScore;
  } else if (customerAge >= 18 && customerAge < 26) {
    riskScore = riskScore * 0.1 + riskScore;

  } else if (customerAge >= 26 && customerAge < 36) {
    riskScore = riskScore * 0.3 + riskScore;

  } else if (customerAge >= 36 && customerAge < 46) {
    riskScore = riskScore * 0.6 + riskScore;

  } else if (customerAge >= 46 && customerAge < 56) {
    riskScore = riskScore * 1 + riskScore;

  } else if (customerAge >= 56 && customerAge < 66) {
    riskScore = riskScore * 1.5 + riskScore;

  } else if (customerAge >= 66) {
    riskScore = riskScore * 2.1 + riskScore;

  }

  health.forEach((item) => {
    if (item.checked) {
      healthResult.push(item.value);
    }
  });

  health.forEach((item) => {
    if (item.checked) {
      if (item.value == "healthy") {
        riskScore;
      } else {
        riskScore = riskScore * 0.01 + riskScore;
      }
    }
  });

  habits.forEach((item) => {
    if (item.checked) {
      habbitsResult.push(item.value);
    }

  });

  habits.forEach((item) => {
    if (item.checked) {
      if (item.value == "good") {
        riskScore = riskScore - riskScore * 0.05;
      } else if (item.value == "bad") {
        riskScore = riskScore + riskScore * 0.05;
      }
    }
  });

  // console.log(riskScore);

  result.innerHTML = `Hello ${customerName}, your age is : ${customerAge} years. <br>
  Your current health : ${healthResult.join(", ")}. <br>
  Your risk score is : ${riskScore}.`

  form.reset();

};

form.addEventListener("submit", riskCalc)