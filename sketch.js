var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var toygun , toybullet , toygunImage , toybulletImage,red
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  toybulletImage = loadImage("bullet.png");
  toygunImage = loadImage("toygun.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  toygun = createSprite(360,220,20,50);
  toygun.addImage(toygunImage); 
  toygun.scale = 0.4;
  
  var toybullet= createSprite(200, 150, 60, 10);
  toybullet.addImage(toybulletImage);
  toybullet.velocityX = -4;
  toybullet.scale = 0.1;

 
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
    
  //moving bow
  toygun.y = World.mouseY
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createBullet();
  }
  //if(toybullet.isTouching(red)){
   // red.destroy();}

  //creating continous balloons
  var blue = Math.round(random(1,1));
  if (World.frameCount % 110 == 0) {
    if (blue == 1) {
      blueBalloon();
    }
  }

  var red = Math.round(random(1,1));
  if (World.frameCount % 210 == 0) {
    if (red == 1) {
      redBalloon();
    }
  }

    var green = Math.round(random(1,1));
  
    if (World.frameCount % 310 == 0) {
      if (green == 1) {
        greenBalloon();
      }
    }
      var pink = Math.round(random(1,1));
  
      if (World.frameCount % 410 == 0) {
        if (pink == 1) {
          pinkBalloon();
        }
      }
        

  
  drawSprites();
  textSize  (20)
   text("score:"+score,300,50)
}
      


// Creating  arrows for bow
 function createBullet() {
  var toybullet= createSprite(200, 150, 60, 10);
  toybullet.addImage(toybulletImage);
  toybullet.x = 360;
  toybullet.y=toygun.y;
  toybullet.velocityX = -4;
  toybullet.lifetime = 90;
  toybullet.scale = 0.1;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 130;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 130;
  blue.scale = 0.1;

}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 130;
  green.scale = 0.1;

}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 130;
  pink.scale = 1.3;

}
