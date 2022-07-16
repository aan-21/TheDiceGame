var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
document.getElementsByClassName("img1")[0].srcset = "img/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img2")[0].srcset = "img/dice" + randomNumber2 + ".png";
if (randomNumber1 === randomNumber2) {
  document.getElementsByTagName("h1")[0].innerText = "It's a Tie!";
} else {
  var winner;
  if (randomNumber1 > randomNumber2) {
    winner = 1;
  } else {
    winner = 2;
  }
  document.getElementsByTagName("h1")[0].innerText = "Player " + winner + " wins!"
}
