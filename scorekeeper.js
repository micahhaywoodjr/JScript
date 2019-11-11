var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var winDisplay = document.getElementById("winDisplay");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

console.log(p1Display);

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        console.log(p1Score);
        p1Display.textContent = p1Score;
    }
 


});
p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        gameOver = true;        
        p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
    }

});

resetButton.addEventListener("click",function(){
    reset();
});
    
   function reset(){
        p2Score = 0;
        p1Score = 0;
        p1Display.textContent = p1Score;
        p1Display.classList.remove("winner");
        p2Display.textContent = p2Score;
        p2Display.classList.remove("winner");
        gameOver = false;

    };


numInput.addEventListener("change", function(){
    
    winDisplay.textContent = Number(numInput.value);
    winningScore = Number(numInput.value);
    reset();
});
