var arr = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
function diceroll(){
var dice1 = Math.floor(Math.random()*6);
var dice2 = Math.floor(Math.random()*6);
    document.querySelector(".img1").setAttribute("src",arr[dice1]);
    document.querySelector(".img2").setAttribute("src",arr[dice2]);
    if(dice1>dice2){
        document.querySelector("h1").textContent="Player 1 Wins yay!!!!";
    } else if(dice1<dice2){
        document.querySelector("h1").textContent="Player 2 Wins yay!!!!";
    } else{
        document.querySelector("h1").textContent="Draw";
    }
}

