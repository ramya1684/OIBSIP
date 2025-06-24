 function convertTemp() {
  const temp = parseFloat(document.getElementById("inputTemp").value);
  const fromUnit = document.getElementById("inputUnit").value;
  const toUnit = document.getElementById("outputUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  if (fromUnit === toUnit) {
    resultDiv.textContent = "Please select different units for conversion!!!";
    return;
  }

  let result;
  let tempC;

  switch (fromUnit) {
    case "C":
      tempC = temp;
      break;
    case "F":
      tempC = (temp - 32) * 5 / 9;
      break;
    case "K":
      tempC = temp - 273.15;
      break;
  }

  switch (toUnit) {
    case "C":
      result = tempC;
      break;
    case "F":
      result = (tempC * 9 / 5) + 32;
      break;
    case "K":
      result = tempC + 273.15;
      break;
  }

  resultDiv.textContent = `${temp}°${fromUnit} is equal to ${result.toFixed(4)}°${toUnit}`;
}

