const Engine=Matter.Engine,World=Matter.World,Bodies=Matter.Bodies,Constraint=Matter.Constraint;
var engine,world,ball,stand,chain;
function setup(){
var canvas=createCanvas(1200,530);
engine=Engine.create();
world=engine.world;
ball=new Ball(550,240);
stand=new Log(600,250,100,PI/2);
chain=new Chain(stand.body,ball.body);}
function draw(){
background("cyan");
Engine.update(engine);
stand.body.position.x=600;
stand.body.position.y=180;
noStroke();
fill("red")
textSize(20);
text("Press 'Space Bar' to move the Ball of Pendulam with the position of Mouse.",100,40);
text("Press 'ENTER key' to leave the Ball Pendulam at its position.",100,80);
text("Press 'SHIFT key' to come back to its Mean Pesition.",100,120);
text("X : "+Math.round(ball.body.position.x),850,40);
text("Y : "+Math.round(ball.body.position.y),850,80);
if(keyCode===32){
ball.body.position.y=mouseY;
ball.body.position.x=mouseX;}
if(keyCode===16){
ball.body.position.y=480;
ball.body.position.x=600;} 
ball.display();
stand.display();
chain.display();}