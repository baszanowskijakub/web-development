const isPalindrome = (word) => {
    const wordArray = word.split("");
    const reversedArray = wordArray.reverse();
    const backwardWord = reversedArray.join("");
    if (backwardWord === word) {
      return true
    } else {
      return false
    }
};
  
const clearWord = (word) => {
    const noSpecialCharactersWord = word.replace(/[^a-zA-Z0-9]/g, '');
    const lowerCaseWord = noSpecialCharactersWord.toLowerCase();
    return lowerCaseWord
}
  
const checkWord = () => {
    console.log("testing");
    const clearedInput = clearWord(textInput.value);
    if (clearedInput === ""){
      alert("Please input a value");
    } else {
      if (isPalindrome(clearedInput)){
        result.innerText = `${textInput.value} is a palindrome`;
        result.className = "palindrome";
      } else {
        result.innerText = `${textInput.value} is not a palindrome`;
        result.className = "not-palindrome";
      };
    }
}
  
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", checkWord);
textInput.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
    checkWord();
    }
});