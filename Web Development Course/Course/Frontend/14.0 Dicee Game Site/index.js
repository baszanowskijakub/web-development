var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dice1NumberSrc = "./images/dice" + randomNumber1 + ".png";
var dice2NumberSrc = "./images/dice" + randomNumber2 + ".png";
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", dice1NumberSrc);
image2.setAttribute("src", dice2NumberSrc);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}