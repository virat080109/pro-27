const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject;
var rope1, rope2, rope3, rope4, rope5;
var engine, world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(800,175,229,20);

	bobDiameter=40;
	startBobPositionX=800;
	startBobPositionY=675;

	bobObject3 = new bob(startBobPositionX, startBobPositionY, bobDiameter);
	bobObject2 =  new bob(startBobPositionX-bobDiameter, startBobPositionY, bobDiameter);
	bobObject1 = new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
	bobObject4 = new bob(startBobPositionX+bobDiameter, startBobPositionY, bobDiameter);
	bobObject5 = new bob(startBobPositionX+bobDiameter*2, startBobPositionY, bobDiameter);

	rope3 = new rope(bobObject3.body, roofObject.body, 0, 0);
	rope2 = new rope(bobObject2.body, roofObject.body, -bobDiameter*1, 0);
	rope1 = new rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	rope4 = new rope(bobObject4.body, roofObject.body, bobDiameter*1, 0);
	rope5 = new rope(bobObject5.body, roofObject.body, bobDiameter*2, 0);

}

function draw() {
  background(230);
  Engine.update(engine);

  rectMode(CENTER);
  roofObject.display();

	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()	
 	bobObject1.display();
 	bobObject2.display();
  	bobObject3.display();
 	bobObject4.display();
 	bobObject5.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  	}
}

