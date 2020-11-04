var wall,thickness;
var weight,speed,bullet;
var damage,quality="Wait...";

function setup(){
  createCanvas(1400,600);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(200,345,40,15);
  bullet.shapeColor="gray";
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="black";
  
}
function draw(){
 background("blue");
 if(bullet.x-wall.x>=((wall.width+bullet.width)/2)){
   bullet.velocityX=0;
   bullet.x=bullet.x-20;
 
 damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 if(damage<10){
   wall.shapeColor="green";
   quality="Good";
 }
 if(damage>10){
   wall.shapeColor="red";
   quality="Bad";
 }
 }
 fill("violet");
 textFont("arabic");
 textSize(20);
 text("Wall Reliability Testing Simulator",650,60);
 textSize(18);
 text("Wall Quality : "+quality,718,95);
 drawSprites();
}