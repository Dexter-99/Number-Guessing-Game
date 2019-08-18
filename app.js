/*
 Game Instructions:
 - Player must guess a number between a min and max
 - Player gets a certain amount of guesses
 - Notify player  of Guesses remaining
 - Notify the player of the correct answer if loose
 - Let player choose to play again
 */
let min=1,max=10;
let number=Math.floor((Math.random()*(max-min))+1);
let guesses_left=3;
//UI elements
let click_btn=document.querySelector('#guess-btn');
let game=document.querySelector('.game');
let message=document.querySelector('.message');
let minNum=document.querySelector('.min-num');
let maxNum=document.querySelector('.max-num');
let guess_num=document.querySelector('#guess-input');
//Assign min and max range
minNum.innerText=min;
maxNum.innerText=max;
//Play Again
game.addEventListener('mousedown',reset);
function reset(e){
  if(e.target.className ==='play-again'){
    console.log(e.target);
    window.location.reload();
  }
}
console.log(number);
//Listen for guess
click_btn.addEventListener('click',checkResult);
function checkResult(e){
  let input_number=parseInt(guess_num.value);
  console.log(input_number);
  if(isNaN(input_number) || input_number>10 || input_number<1)
  {
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }
  // Winning Number
  else if(input_number===number)
  {
   gameOver(true,`Correct Answer`);
  }
  else{
     guesses_left-=1;
     //Game Over -Lost
     if(guesses_left==0){
      gameOver(false,`You Lost ! The correct Answer was ${number}`);
     }
     //Game continues -Wrong Answer
     else{
       setMessage(`Wrong Aswer ! You have ${guesses_left} choices remaining`,'red');
     }
  }

}
function setMessage(msg,color)
{
  message.innerText=msg;
  message.style.color=color;
  guess_num.style.borderColor=color;
}
function gameOver(won,msg){
  let color=(won===true)?'green':'red';
  guess_num.disabled=true;
  setMessage(msg);
  guess_num.style.borderColor=color;
  message.style.color=color;
  click_btn.value="Play Again";
  click_btn.className+="play-again";
}


