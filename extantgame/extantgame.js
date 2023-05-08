var ballx = 250;
var bally = 250;
var ballSize = 100;
var score = 0;
var gameState = "L1";
var distToBall;

function preload() {
img = loadImage('icefield.jpg');
img2 = loadImage('polarbear.png');
img3 = loadImage('ringedseal.png');
img4 = loadImage('icefield2g.jpg');
img5 = loadImage('polarbear2.png');
img6 = loadImage('ringedseal2.png');
img7 = loadImage('icefield3g.jpg');
img8 = loadImage('polarbear3.png');
img9 = loadImage('ringedseal3.png');
img10 = loadImage('icefield4g.jpg');
img11 = loadImage('polarbear4.png');
img12 = loadImage('ringedseal4.png');
img13 = loadImage('icefield5g.jpg');
img14 = loadImage('polarbear5.png');
img15 = loadImage('ringedseal5.png');
img16 = loadImage('icefield6g.jpg');
}

function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(40);
img2.resize(150, 150);
img5.resize(150, 150);
img8.resize(150, 150);
img11.resize(150, 150);
img14.resize(150, 150);
noCursor();

}//end set up


function draw() {
background(150, 47, 15);
if(gameState == "L1"){
   background(img);
   image(img2, mouseX, mouseY);
   levelOne();
}
if(gameState == "L2"){ 
   background(img4);
   image(img5, mouseX, mouseY);
   levelTwo();
}
if(gameState == "L3"){
   background(img7);
   image(img8, mouseX, mouseY);
   levelThree();
}
if(gameState == "L4"){
   background(img10);
   image(img11, mouseX, mouseY);
   levelFour();
}
if(gameState == "L5"){
   background(img13);
   image(img14, mouseX, mouseY);
   levelFive();
}
if(gameState == "youWin"){
   background(img16);
   youWin();
}
   
text(("Score:  " + score), width/2, 40);
} // end draw

function levelOne() {
  text("Level 1", width/2, height -20);
  distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;
  ballSize = ballSize -4;

}


if(score>= 5){
  gameState = "L2"
  
}
  image(img3, ballx, bally, ballSize, ballSize);
  //line(ballx, bally, mouseX, mouseY);

} //end of level 1 ============================

function levelTwo() {
  text("Level 2", width/2, height -20);
  distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;
  ballSize = ballSize -4;
}


if(score>= 10){
  gameState = "L3";
  
}
  image(img6, ballx, bally, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);

} //end of level 2 ============================

function levelThree() {
  text("Level 3", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;
  ballSize = ballSize -4;

}


if(score>= 15){
  gameState = "L4";
  
}
  image(img9, ballx, bally, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} //end of level 3 ============================

function levelFour() {
  text("Level 4", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;
  ballSize = ballSize -4;

}


if(score>= 20){
  gameState = "L5";
  
}
  image(img12, ballx, bally, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} //end of level 4 ============================

function levelFive() {
  text("Level 5", width/2, height -20);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;
  ballSize = ballSize -4;

}


if(score>= 25){
  gameState = "youWin";
  
}
  image(img15, ballx, bally, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} //end of level 5 ============================

function youWin() {
  text("Hey You Won... Or Did You?", width/2, height -20);
  fill(255, 255, 255);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
if(distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score = score +1;
  ballSize = ballSize -5;

}

if(score>= 30){
  gameState = "youWin";
}  
  
function resetTheGame(){
  gameState = "L1";
  score = 0;
  goHomeBtn.remove(); // remove the button element from the DOM
}
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);

} //end of youWin ============================
