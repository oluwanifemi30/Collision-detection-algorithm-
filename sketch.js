var moving,fixed;

function setup() {
  createCanvas(1200,800);
  fixed=createSprite(400, 200, 80, 50);
  moving=createSprite(200,200,50,80)
  moving.shapeColor="red"
  fixed.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  moving.y=World.mouseY;
  moving.x=World.mouseX;

  if(moving.x-fixed.x<fixed.width/2+moving.width/2
    &&fixed.x-moving.x<fixed.width/2+moving.width/2
    &&moving.y-fixed.y<fixed.height/2+moving.height/2
    &&fixed.y-moving.y<fixed.height/2+moving.height/2){
      moving.shapeColor="blue"
      fixed.shapeColor="purple"
    }
    else{
      moving.shapeColor="red"
      fixed.shapeColor="green" 
    }


  drawSprites();
}