
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var spacecraft1IMG,spacecraft2IMG,spacecraft3IMG,spacecraft4IMG;
var spaceBGIMG;
var iss , issIMG;
var hasDocked;
function preload(){
  spacecraft1IMG = loadAnimation("spacecraft1.png");
  spacecraft2IMG = loadAnimation("spacecraft2.png");
  spacecraft3IMG = loadAnimation("spacecraft3.png");
  spacecraft4IMG = loadAnimation("spacecraft4.png");
  spaceBGIMG = loadImage("spacebg.jpg");
  issIMG = loadAnimation("iss.png");
}

function setup() {
  createCanvas(1200,900);

  iss = createSprite(400, 200, 50, 50);
  iss.addAnimation("abc",issIMG);
  iss.debug = true
  
  spacecraft1 = createSprite(700, 700, 50, 50);
  spacecraft1.addAnimation("center",spacecraft1IMG);
  spacecraft1.scale = 0.5;
 
  
  
}

function draw() {
  background(spaceBGIMG);  
  hasDocked = false;

  if (!hasDocked){
    if(keyDown("left_Arrow")){
      spacecraft1.addAnimation("left",spacecraft4IMG)
      spacecraft1.x = spacecraft1.x-3
    }
    if(keyDown("right_Arrow")){
      spacecraft1.addAnimation("right",spacecraft3IMG);
      spacecraft1.x = spacecraft1.x+3;
    }
    if(keyDown("UP_Arrow")){
      spacecraft1.addAnimation("up",spacecraft2IMG);
      spacecraft1.y = spacecraft1.y-3
    }
    if(keyDown("Down_Arrow")){
     
      spacecraft1.y = spacecraft1.y+3
    }
    
  }
  drawSprites();
}