function setup() {
createCanvas(600, 600);
}


function draw() {
background(129, 216, 208);//background color
fill(158, 3, 16);//color for body
ellipse(300, 630, 280, 600);//body
fill(240, 203, 129);//skin tone for face
ellipse(300, 300, 250, 300);//face
fill(300);//inner shirt color
rect(275, 450, 55, 150);//inner shirt
fill(300);//whites of eyes
ellipse(240, 280, 55, 25);//left eye
ellipse(360, 280, 55, 25);//right eye
fill(219, 188, 167);//mouth color
ellipse(300, 350, 55, 25);//mouth
fill(219, 194, 151);//nose color 
triangle(300, 300, 300, 250, 350, 300);//nose
fill(115);//pupil color
circle(370, 280, 20);//left pupil
circle(250, 280, 20);//right pupil
noFill();
rect(220, 260, 60, 40);//left glass frame
rect(340, 260, 60, 40);//right glass frame
line(175, 280, 220, 280);//left glass leg
line(425, 280, 400, 280);//right glass leg
line(280, 280, 340, 280);//glasses nose bridge
fill(51, 102, 30);//color of hat
arc(300, 240, 250, 250, 110, TWO_PI);//hat base
rect(145, 230, 310, 40);//hat rim
}
