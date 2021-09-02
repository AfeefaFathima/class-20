var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "orange";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "orange";
}

function draw() {
  background("black");  //0-255 0-255 0-255 --> 0,0,0

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){

    fixedRect.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";

  }
  else {
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }

  drawSprites();
}