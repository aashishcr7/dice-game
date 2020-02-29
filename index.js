var randomNumber1=Math.floor((Math.random()*6)+1);// number from 1 to 6

var randomDiceImage="dice"+randomNumber1+".png";// get image name i.e dice1 to dice6

var randomImageSource="images/" + randomDiceImage;// get the source of the image i.e images/dice1 to images/dice6

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor((Math.random()*6)+1);// number from 1 to 6 for second image

var randomDiceImage2="dice"+randomNumber2+".png";// get image name i.e dice1 to dice6 for second image

var randomImageSource2="images/" + randomDiceImage2;// get the source of the image i.e images/dice1 to images/dice6 for second image

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Conditon test

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 Wins! 🏁"
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🏁";
}
else{
  document.querySelector("h1").innerHTML="The game Ties";
}
