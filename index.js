
function genWinner()
{var randomNum = Math.floor(Math.random()*6)+1;
console.log(randomNum);
var randomNum2 = Math.floor(Math.random()*6)+1;

var randomImg = "images/dice"+randomNum+".png";
var randomImg2 = "images/dice"+randomNum2+".png";


if(randomNum>randomNum2)
document.querySelector("h1").innerHTML = "<img src='images/winner.png' class ='winner' alt='winner-sign'> Player 1 Wins !";

else if(randomNum===randomNum2)
document.querySelector("h1").innerHTML = " Draw !";

else
document.querySelector("h1").innerHTML = "<img src='images/winner.png' class ='winner' alt='winner-sign'> Player 2 Wins !";



document.querySelector(".dice .img1").setAttribute("src",randomImg);
document.querySelector(".dice .img2").setAttribute("src",randomImg2);
}
