var car, wall, speed, weight 
function setup() {
  createCanvas(800,400);
  speed=random(50,90)
  weight=random(400,1500)
  car=createSprite(400, 200, 50, 50);
  car.velocityX=speed
  car.shapeColor="white"
   wall=createSprite(750,200,40,200)
   wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180 && deformation<100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
  }
  drawSprites();
}