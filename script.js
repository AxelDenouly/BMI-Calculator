const BMIData = [
    { name: "Thinnes", color: "midnightblue", range: [0, 18.5] },
    { name: "Good health", color: "green", range: [18.5, 25] },
    { name: "Excess weight", color: "lightcoral", range: [25, 30] },
    { name: "Moderate obesity", color: "orange", range: [30, 35] },
    { name: "Severe obesity", color: "crimson", range: [35, 40] },
    { name: "Morbid obesity", color: "purple", range: 40 },
  ];

  // BMI Calculation Script Code

  const form = document.querySelector("form")

  form.addEventListener('submit', handleForm)

  function handleForm(e) {
    e.preventDefault();
    console.log(e);

    calculateBMI()
  }

  const inputs = document.querySelectorAll('input')

  function calculateBMI() {
    const height = inputs[0].value;
    const weight = inputs[1].value;

    if(!height || !weight || height <= 0 || weight <= 0) {
        handleError()
        return;
    }

    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1)

    console.log(BMI);

    showResult(BMI);
}

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError() {
    displayBMI.textContent = "Ooops";
    displayBMI.style.color = "inherit";
    result.textContent = "Correctly fill in the fields to be filled in";
}

function showResult(BMI) {
    const rank = BMIData.find(data => {
        if (BMI >= data.range[0] && BMI < data.range[1]) return data;
        else if (typeof data.range === "number" && BMI >= data.range) return data;
    })

    displayBMI.textContent = BMI
    displayBMI.style.color = `${rank.color}`
    result.textContent = `${rank.name}`
}
