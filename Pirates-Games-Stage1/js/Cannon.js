class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImage=loadImage("assets/canon.png");
    this.cannonbaseImage=loadImage("assets/cannonBase.png");
 } 
  display() {
  //console.log(this.angle)
  if(keyIsDown(RIGHT_ARROW) && this.angle<70)//down
 {
 this.angle++
 } 
  if(keyIsDown(LEFT_ARROW) && this.angle>-30)//up
 {
 this.angle--

 }

  //Code To create cannon top

  push();
  imageMode(CENTER);
  translate(this.x,this.y);
  rotate(this.angle);
  image(this.cannonImage,0,0,this.width,this.height);
  pop();
  //Code to create cannon bottom
  image(this.cannonbaseImage,70,20,200,200);
  
  noFill();
  }
}
