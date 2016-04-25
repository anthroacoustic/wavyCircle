var yOff= 0;

function setup() {
  createCanvas (400, 400);
  

  
}


function draw() {
  clear();
  background (40);
  translate(width/2, height/2);
    var xOff = 10;
    
  beginShape();
  for (var i = 0; i <= 100; i++) {
    var ang = map(i, 0, 100, 0.05, TWO_PI);
   
    rad = map (noise (sin(ang) * xOff *3.01, cos(ang) * yOff *3.01), 0, 1, 75, 100);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  
    
    xOff += .000001;
    
  }
    yOff += .02;
  endShape(CLOSE);
  
 

  
}