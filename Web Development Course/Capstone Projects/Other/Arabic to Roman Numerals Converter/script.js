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
  if (!numberInput.value){
    outputEl.innerText = "Please enter a valid number"
  } else if (numberInput.value < 0) {
    outputEl.innerText = "Please enter a number greater than or equal to 1"
  } else if  (numberInput.value >= 4000){
    outputEl.innerText = "Please enter a number less than or equal to 3999"
  } else {
    const result = convertNumbers(parseInt(numberInput.value));
    outputEl.innerText = result;
  }
});

