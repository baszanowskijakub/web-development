const convertButton = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const outputEl = document.getElementById("output");
const romanNumerals = [
  {symbol: "M", value: 1000},
  {symbol: "CM", value: 900},
  {symbol: "D", value: 500},
  {symbol: "CD", value: 400},
  {symbol: "C", value: 100},
  {symbol: "XC", value: 90},
  {symbol: "L", value: 50},
  {symbol: "XL", value: 40},
  {symbol: "X", value: 10},
  {symbol: "IX", value: 9},
  {symbol: "V", value: 5},
  {symbol: "IV", value: 4},
  {symbol: "I", value: 1}
];

const convertNumbers = (input) => {
  // Special case for zero
  if (input === 0) {
    return "N"; // Using "N" for "nulla" (none) as the modern convention for zero
  }
  
  let num = input;
  let result = "";
  romanNumerals.forEach(
    ({symbol, value}) => {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
  )
  return result
}

convertButton.addEventListener("click", () => {
  if (numberInput.value === "") {
    outputEl.innerText = "Please enter a valid number"
  } else if (numberInput.value < 0) {
    outputEl.innerText = "Please enter a number greater than or equal to 0"
  } else if (numberInput.value >= 4000) {
    outputEl.innerText = "Please enter a number less than or equal to 3999"
  } else {
    const num = parseInt(numberInput.value);
    const result = convertNumbers(num);
    
    if (num === 0) {
      outputEl.innerHTML = `<span class="result">${result}</span>
                           <div class="fun-fact">Fun fact: Romans didn't have a symbol for zero! 
                           Modern conventions use "N" from "nulla" (meaning "none") 
                           to represent zero in Roman numerals.</div>`;
    } else {
      outputEl.innerHTML = `<span class="result">${result}</span>`;
    }
  }
});