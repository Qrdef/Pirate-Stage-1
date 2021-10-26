class CannonBall
{
constructor(a,b)
{
var options={
isStatic:true
}

this.x=a
this.y=b
this.r=30
this.speed=0.05
this.trajectory=[]
this.animation=[this.cannonballImage];
this.isSink=false;
this.body=Bodies.circle(a,b,30,options);
this.cannonballImage=loadImage("assets/cannonball.png");
World.add(world,this.body);
}

animate()
{
this.speed+=0.05
}
display()
{
var pos=this.body.position;
var angle=this.body.angle
var index=floor(this.speed%this.animation.length)
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.animation[index],0,0,this.r,this.r);

pop();
if(this.body.velocity.x>0 && pos.x>10 && !this.isSink)
{
var position=[pos.x,pos.y]
this.trajectory.push(position)
for(var i=0; i<this.trajectory.length; i++)
{
image(this.cannonballImage,this.trajectory[i][0],this.trajectory[i][1],5,5)

}
}
}
remove(index)
{
this.isSink=true
Matter.Body.setVelocity(this.body,{x:0,y:0});
this.animation=waterSplashAnimation
this.speed=0.05
this.r=150 
setTimeout(()=>{
Matter.World.remove(world,this.body)
delete balls[index]
},1000)}
shoot()
{
var newAngle=cannon.angle-28;
//convert angle to radians;
newAngle=newAngle*(3.14/180);
//function that accepts default value of the angle in radians;
var velocity=p5.Vector.fromAngle(newAngle);
velocity.mult(0.5);
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14)
    ,y:velocity.y*(180/3.14)});}}




