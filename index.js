var randvar1 = Math.floor((Math.random() * 6) + 1);
var randvar2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").src = "images/dice" + randvar1 + ".png";
document.querySelector(".img2").src = "images/dice" + randvar2 + ".png";

if(randvar1>randvar2){
  document.querySelector("h1").innerHTML = "🏆 1st Wins";
} else if(randvar1==randvar2){
  document.querySelector("h1").innerHTML = "🏆 DRAW 🏆";
} else document.querySelector("h1").innerHTML = "2nd Wins 🏆";
