class Boat
{
constructor(a,b,c,d,boatPos,boatAnimation)
{
this.x=a;
this.y=b;
this.w=c;
this.h=d;
this.animation=boatAnimation
this.speed=0.05
this.boatPosition=boatPos;//To store the current pos of boat
this.isBroken=false
this.body=Bodies.rectangle(a,b,c,d);
this.boatImage=loadImage("assets/boat/boat.png");
World.add(world,this.body);
}
remove(index)
{
this.animation=brokenBoatAnimation
this.speed=0.05
this.width=300
this.height=300
this.isBroken=true
//setTimeout to exucute the code after a certain time intervel
//Creating a setTimeout function as an arrow function
//Function_name(()=>{})//creating an arrow function
setTimeout(()=>{
Matter.World.remove(world,boats[index].body)
delete balls[index]
},2000)

}
animate()
{
this.speed+=0.05


}

display()
{
var pos=this.body.position
var angle=this.body.angle
var index=floor(this.speed%this.animation.length);
push();
translate(pos.x,pos.y);
rotate(angle);

imageMode(CENTER);
image(this.animation[index],0,this.boatPosition,this.w,this.h);

pop();
}}