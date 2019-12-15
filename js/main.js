 let food = 0;
    let clean =0;
    let happiness =0;
let time=1;
function checkGame() {
    let e = document.getElementById("levelup");
    let level = e.options[e.selectedIndex].value;
    if (level==='0') {
      document.getElementById("start").onclick = startGame2();
    }
    else {
       document.getElementById("start").onclick =  startGame1(); 
    }
  }
  function startGame1(){
    document.getElementById("start").style.display = "none";
    food = Math.floor(Math.random() * 51) + 50;
    clean =Math.floor(Math.random() * 51) + 50;
    happiness = Math.floor(Math.random() * 51) + 50;
    time =3;
    document.getElementById('food').innerHTML = food + '%';
    document.getElementById('food').style.width = food + 'px';
    document.getElementById('clean').innerHTML = clean + '%';
    document.getElementById('clean').style.width = clean + 'px';
    document.getElementById('happiness').innerHTML = happiness + '%';
    document.getElementById('happiness').style.width = happiness + 'px';
    game();
    }
  function startGame2(){
    document.getElementById("start").style.display = "none";
    food = Math.floor(Math.random() * 21) + 50;
    clean =Math.floor(Math.random() * 21) + 50;
    happiness = Math.floor(Math.random() * 21) + 50;
    time = 5;
    document.getElementById('food').innerHTML = food + '%';
    document.getElementById('food').style.width = food + 'px';
    document.getElementById('clean').innerHTML = clean + '%';
    document.getElementById('clean').style.width = clean + 'px';
    document.getElementById('happiness').innerHTML = happiness + '%';
    document.getElementById('happiness').style.width = happiness + 'px';
    game();
  }
function game(){
function GameOver(){
  document.getElementById("cat").src="img/gameover.gif";
  document.getElementById('message').innerHTML = "GAME OVER"+"<br>"+"SCORE: "+score;
  clearInterval(Loop);
  clearInterval(life);
  long=0;
  food=0;
  clean=0;
  happiness=0;
  rewriteFood(0);
  rewriteClean(0);
  rewriteHappiness(0);
  rewriteFoodStyle(0);
  rewriteCleanStyle(0);
  rewriteHappinessStyle(0);
  stopTimer();
}
function rewriteFood(x){
  document.getElementById('food').innerHTML = x +'%';
}
function rewriteFoodStyle(x){
  document.getElementById('food').style.width = x + 'px';
}

function rewriteClean(x){
  document.getElementById('clean').innerHTML = x+'%';
}

function rewriteCleanStyle(x){
  document.getElementById('clean').style.width = x + 'px';
}

function rewriteHappiness(x){
  document.getElementById('happiness').innerHTML = x+'%';
}

function rewriteHappinessStyle(x){
  document.getElementById('happiness').style.width = x + 'px';
}

function Loop(){
  let sum = food + clean + happiness;
  if (sum >210){
    document.getElementById("cat").src="img/70%.gif";
    document.getElementById('help').innerHTML = '  ';
  } else if(food <= clean && food <= happiness){
     document.getElementById("cat").src="img/wantEat.gif";
     document.getElementById('help').innerHTML = 'Want Eat...';
  } else if(clean < food && clean <= happiness){
     document.getElementById("cat").src="img/wantClean.gif";
     document.getElementById('help').innerHTML = 'Clean my bad! Please...';
  } else if(happiness < food && happiness <  clean){
     document.getElementById("cat").src="img/50%.gif";
      document.getElementById('help').innerHTML = 'Please... Play with me!';
  }
  food = food - parseInt(time);
  clean = clean - parseInt(time);
  happiness = happiness - parseInt(time);
  rewriteFoodStyle(food);
  rewriteCleanStyle(clean);
  rewriteHappinessStyle(happiness);
 
  if (food>0){
  rewriteFood(food);
  } else if (food<=0){
    food=0; 
    rewriteFood(0);
    rewriteFoodStyle(0);
    GameOver();
  }

  if (clean>0){
    rewriteClean(clean);
  } else if (clean<=0){
    clean=0; 
    rewriteClean(0);
    rewriteCleanStyle(0);
    GameOver();
  }

  if (happiness>0){
    rewriteHappiness(happiness);
} else if (happiness<=0) {
    happiness=0;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(0);
    GameOver();
  }
}

function Start(){
  let speed = setInterval(Loop, 5000);
}
Start();
document.getElementById('eat').onclick = function eat(){

  if (clean>20){
  clean-=20;
  rewriteClean(clean);
  rewriteCleanStyle(clean);
} else if (clean>0 &&clean<=20){
  clean-=clean;
  rewriteClean(0);
  rewriteCleanStyle(0);
  GameOver();
} else if (clean=0){
  GameOver();
}
  if( food<=70 && food>0 ){
    food += 30;
    rewriteFood(food);
    rewriteFoodStyle(food);
  } else if (food>70){
    rewriteFood(100);
    rewriteFoodStyle(100);
  }
}
document.getElementById('wash').onclick = function wash(){
  if (happiness>20){
    happiness -= 20;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if(happiness>=0 && happiness<=20){
    happiness -= happiness;
    rewriteHappiness(0);
    rewriteHappinessStyle(0);
    GameOver();
}
  if( clean<=60 && clean>0){
    clean += 40;
    rewriteClean(clean);
    rewriteCleanStyle(clean);
  } else if (clean>60){
    rewriteClean(100);
    rewriteCleanStyle(100);
  }
}
document.getElementById('run').onclick = function run(){

   if (food>10){
  food-=10;
  rewriteFood(food);
  rewriteFoodStyle(food);
   } else if (food>=0 && food<=20){
    food-=food;
  rewriteFood(0);
  rewriteFoodStyle(0);
  GameOver();
}

  if(happiness <= 85 && happiness>0){
    happiness += 15;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if (happiness>60){
    rewriteHappiness(100);
    rewriteHappinessStyle(100);
  }
}

let score=0;
function life (){
  score++;
  document.getElementById('score').innerHTML = "SCORE: " + score;
}
 
let timer = setInterval(life, 1000);
function stopTimer() { clearInterval(timer); 0}; 
}