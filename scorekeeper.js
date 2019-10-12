var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p1");
var ps1Dispay = document.querySelector("#ps1Dispay");
var h1 = document.querySelector("h1");


var  p1Score = 0;

p1Button.addEventListener("click", function(){
    p1Score ++;
    ps1Dispay.textContent = p1Score;

})