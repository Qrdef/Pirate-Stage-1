const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var world;
var engine;
var bgImg;
var ground,tower,angle,cannon;
var towerImg;
var cannonball;
var boat;
var balls=[]
var boats=[]
var boatAnimation=[]
var boatSpriteData//Contains all data from json
var boatSpritesheet//Contains all images
var brokenBoatAnimation=[]
var brokenBoatSpriteData//Contains all data from json
var brokenBoatSpritesheet//Contains all images
var waterSplashAnimation=[]
var waterSplashSpriteData//Contains all data from json
var waterSplashSpritesheet//Contains all images

//examples of arrays when number of items are unknown
var arr0 = []
//examples of arrays
var arr=[1,2,3]
//arrays holding different types of values
var arr2=["name",1,true]
//arrays holding list of arrays
var arr3=[[1,2],[3,4],[5,6]]
//print the first elemenet in of arr
console.log(arr[0])
console.log(arr3[[0][1]])
function preload()
{
bgImg=loadImage("assets/background.gif");
towerImg=loadImage("assets/tower.png");
boatSpriteData=loadJSON("assets/boat/boat.json");
boatSpritesheet=loadImage("assets/boat/boat.png");
brokenBoatSpriteData=loadJSON("assets/boat/brokenboat.json");
brokenBoatSpritesheet=loadImage("assets/boat/brokenboat.png");
waterSplashSpriteData=loadJSON("assets/waterSplash/waterSplash.json");
waterSplashSpritesheet=loadImage("assets/waterSplash/waterSplash.png")
}


function setup()
{
createCanvas(1200,600);
engine = Engine.create()
world = engine.world;
angleMode(DEGREES);
angle=15
var options={
isStatic:true
}
ground=Bodies.rectangle(0,height-1,width*2,1,options);
World.add(world,ground);
tower=Bodies.rectangle(160,350,160,310,options);
World.add(world,tower);
cannon=new Cannon(180,110,130,100,angle);
var boatFrames=boatSpriteData.frames
for(var i=0; i<boatFrames.length;i++)
{
var pos=boatFrames[i].position  
var img=boatSpritesheet.get(pos.x,pos.y,pos.w,pos.h)
boatAnimation.push(img)

}
//broken boat frames
var brokenBoatFrames=brokenBoatSpriteData.frames
for(var i=0; i<brokenBoatFrames.length;i++)
{
var pos=brokenBoatFrames[i].position  
var img=brokenBoatSpritesheet.get(pos.x,pos.y,pos.w,pos.h)
brokenBoatAnimation.push(img)

}
//water splash frames
var waterSplashFrames=waterSplashSpriteData.frames
for(var i=0; i<waterSplashFrames.length;i++)
{
var pos=waterSplashFrames[i].position  
var img=waterSplashSpritesheet.get(pos.x,pos.y,pos.w,pos.h)
waterSplashAnimation.push(img)

}
}

function draw()
{
background(189);
image(bgImg,0,0,width,height);
cannon.display();
showBoat();
//cannonball.display();
Engine.update(engine);

push();
rect(ground.position.x,ground.position.y,width*2,1);
imageMode(CENTER);
image(towerImg,tower.position.x,tower.position.y,160,310);
for(var i=0; i<balls.length; i++)
{
showCannonBalls(balls[i],i)
collisionWithBoat(i);
}
pop();
}
function keyReleased()
{
if(keyCode==DOWN_ARROW)
{

//cannonball.shoot();
balls[balls.length-1].shoot();
}
}
function keyPressed()
{
if(keyCode==DOWN_ARROW)
{
var cannonball=new CannonBall(cannon.x,cannon.y);
cannonball.trajectory=[]//array for trajectory
Matter.Body.setAngle(cannonball.body,cannon.angle)
balls.push(cannonball)

}
}
function showCannonBalls(ball,index)
{
if(ball)
{
ball.display();
ball.animate();
if(ball.body.position.x>=width || ball.body.position.y>=height-50)
{
ball.remove(index);
}}}
function showBoat()
{
if(boats.length>0)//If boats in array then...
{
if(boats[boats.length-1]==undefined ||
boats[boats.length-1].body.position.x<width-300)
{
var positions=[-40,-60,-70,-20]// random positions for boat
var position=random(positions)
var boat=new Boat(width,height-100,170,170,position,boatAnimation)//Making boat with the random position

boats.push(boat)
}
for(var i=0; i<boats.length;i++)//"inf loop"
{
if(boats[i])
{
Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0});
}
boats[i].display();
boats[i].animate();

}
}
else
{
var boat=new Boat(width-79,height-60,170,170,-60,boatAnimation);
boats.push(boat);

}


}
function collisionWithBoat(index)//index is position of ball
{
for(var i=0; i<boats.length; i++)//"inf loop"
{
if(balls[index]!==undefined && boats[i]!==undefined)//if both balls and boats is not undifiend
{
var collision=Matter.SAT.collides(balls[index].body,boats[i].body)
if(collision.collided)
{
boats[i].remove(i);
Matter.World.remove(world,balls[index].body)
delete balls[index]
}}}}//SAT is used for testing collision.