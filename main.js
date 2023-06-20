var randomNumber1 =Math.floor(Math.random() * 6 + 1)
var randomNumber2 =Math.floor(Math.random() * 6 + 1)

var imgNum1 = document.querySelector(".img1").src="./images/dice" + randomNumber1 + ".png"

var imgNum2 = document.querySelector(".img2").src="./images/dice" + randomNumber2 + ".png"

var result = document.querySelector("h1")

if(randomNumber1 > randomNumber2){
    result.innerHTML = "Player 1 won!"
}else if(randomNumber1 < randomNumber2){
    result.innerHTML = "Player 2 won!"
}else{
    result.innerHTML = "It's a tie !"
}






















//var randomNumber1 = Math.floor(Math.random() * 6) + 1