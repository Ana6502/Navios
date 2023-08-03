var sea, movement
function preload(){
movement_ing=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
sea=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  wallpaper=createSprite(400,200)
  wallpaper.addImage(sea)
  wallpaper.scale=0.5
  wallpaper.velocityX=1
  movement=createSprite(200,200)
  movement.scale=0.3
  movement.addAnimation("moving", movement_ing)
}

function draw() {
  background("blue");
    drawSprites();
  if (sea.x < 0) {
    sea.x= sea.width/2;
  }
 
}
