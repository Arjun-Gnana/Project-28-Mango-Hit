
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, mango1, mango2, mango3, mango4, mango5;
var boy;
var rock;
var ground, slingShot;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new Tree(900,425,20,20);
	boy = new Boy(200,620,50,50);
	rock = new Stone(120,540,20,20);
   
	ground = new Ground(600,690,1200,20);
	mango1 = new Mango(900,215,50,50);
	mango2 = new Mango(730,350,50,50);
	mango3 = new Mango(1100,350,50,50);
	mango4 = new Mango(1000,300,50,50);
	mango5 = new Mango(830,305,50,50);
    slingShot = new SlingShot(rock.body,{x:120,y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 150, 150);
  tree1.display();
  rock.display();
  boy.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingShot.display();
  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(Lrock,Lmango){
	mangoBodyPosition = Lmango.body.position;
	rockBodyPosition = Lrock.body.position;

	var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance<=Lmango.r+Lrock.r){
			Matter.body.setStatic(Lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode === 32) {
		slingShot.attach(rock.body);
	}
}