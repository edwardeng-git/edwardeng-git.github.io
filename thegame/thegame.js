var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function preload() {
// img = loadImage('cat.jpg');
}

function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(40);

}//end set up


function draw() {
background(150, 47, 15);
if(gameState == "L1"){
   levelOne();
}
if(gameState == "L2"){ 
   levelTwo();
}
if(gameState == "L3"){
   levelThree();
}
if(gameState == "youWin"){
   youWin();
}

text(("Score:  " + score), width/2, 40);
} // end draw

function levelOne() {
  text("level 1", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;

}


if(score>= 5){
  gameState = "L2"
  
}

  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);

} //end of level 1 ============================

function levelTwo() {
  background(102, 186, 0);
  text("level 2", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;

}


if(score>= 10){
  gameState = "L3";
}

  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);

} //end of level 2 ============================

function levelThree() {
  background(66, 135, 245);
  text("level 3", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;
  ballSize = ballSize -5;

}


if(score>= 15){
  background(255, 255, 145);
  gameState = "youWin";
  
}
else{
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
}
} //end of level 3 ============================

function youWin() {
  text("You Won", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;

}

function resetTheGame(){
  gameState = "L1";
  score = 0;
  goHomeBtn.remove(); // remove the button element from the DOM
}
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);

} //end of youWin ============================
