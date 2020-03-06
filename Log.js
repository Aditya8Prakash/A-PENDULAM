class Log extends BaseClass{constructor(x,y,height,angle){
super(x,y,20,height,angle);
this.image=loadImage("stand.png");
this.body.position.x=230;
this.body.position.y=180;
Matter.Body.setAngle(this.body, angle);}}