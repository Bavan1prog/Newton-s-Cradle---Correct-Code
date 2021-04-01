
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,230,30);
	World.add(world,roof);

	bob1 = new BOB(250,300);
	bob2 = new BOB(300,300);
	bob3 = new BOB(350,300);
	bob4 = new BOB(400,300);
	bob5 = new BOB(450,300);

	rope1 = new Rope (bob1.body,roof.body,-50*2,0);
	rope2 = new Rope(bob2.body,roof.body,-50*1.5,0);
	rope3 = new Rope(bob3.body,roof.body,-50*1,0);
	rope4 = new Rope(bob4.body,roof.body,-50*0.5,0);
	rope5 = new Rope(bob5.body,roof.body,-50*0,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-110,y:-110})
}
}



