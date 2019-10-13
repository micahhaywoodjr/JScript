var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var p1Score = 0;
var p2Score = 0;
var gamOver = false;
var winningScore = 5;

console.log(p1Display);

p1Button.addEventListener("click", function(){
    if(!gamOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
        }
        console.log(p1Score);
        p1Display.textContent = p1Score;
    }
 


});
p2Button.addEventListener("click", function(){
    if(!gamOver){
    p2Score++;
    if(p2Score === winningScore){
        gameOver = true;        
    }
    p2Display.textContent = p2Score;
    }

})
console.log(p2Button);