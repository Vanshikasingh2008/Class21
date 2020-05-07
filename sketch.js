var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 =createSprite(300,300,50,60);
  rect1.velocityX = 5;
  rect2 = createSprite(600,300,30,70);
  rect2.velocityX = -5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedRect,movingRect);
  bounceOff(rect1,rect2);

  drawSprites();
}

function bounceOff (objects1,objects2){
  if (objects1.x - objects2.x < objects2.width/2 + objects1.width/2
    && objects2.x - objects1.x < objects2.width/2 + objects1.width/2) {
  objects1.velocityX = objects1.velocityX * (-1);
  objects2.velocityX = objects2.velocityX * (-1);
}
if (objects1.y - objects2.y < objects2.height/2 + objects1.height/2
  && objects2.y - objects1.y < objects2.height/2 + objects1.height/2){
  objects1.velocityY = objects1.velocityY * (-1);
  objects2.velocityY = objects2.velocityY * (-1);
}
}