var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomSourceImage1 = "assets/"+randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSourceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomSourceImage2 = "assets/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSourceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "😎 Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "😎 Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "😒 Game Drawn!";
}