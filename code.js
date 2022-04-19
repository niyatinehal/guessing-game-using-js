# guessing-game-using-js
let message= parseInt(prompt("enter a your maximum number"));
 while(!message)
 {
     message=parseInt(prompt("enter valid number"));
 }
 const Num= Math.floor(Math.random()*message)+1;
 console.log(Num);

 let guess=parseInt(prompt("enter your first guess"));
 let attempt=1

 while(parseInt(guess) !==Num)
 {    if(guess === 'q') {break;}
     attempt++;
     if(guess>Num)
     {
         guess=prompt("Guess too high! think lower");
     }else
     {
         guess=prompt ("Guess too low! think higher");
     }
 }
 if(guess==='q')
 {
     console.log("okay you can quit!");
 }
 else
 {
     console.log(`it took you ${attempt} guesses`);
 }
