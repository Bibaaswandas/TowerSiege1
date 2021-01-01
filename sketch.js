
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImage, skyImage, boyImage, score;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new mango(1420.625,250,68.75,68.75);
	mango2 = new mango(1351.875,250, 68.75, 68.75);
	mango3 = new mango(1283.125,250, 68.75, 68.75);
	mango4 = new mango(1214.375,250, 68.75, 68.75);
	mango5 = new mango(1145.625,250, 68.75, 68.75);
	mango6 = new mango(1076.875,250, 68.75, 68.75);
	mango7 = new mango(1008.125,250, 68.75, 68.75);
	mango8 = new mango(939.375,250, 68.75, 68.75);



	
	mango10 = new mango(1351.875,181.25, 68.75, 68.75);
	mango11 = new mango(1283.125,181.25, 68.75, 68.75);
	mango12 = new mango(1214.375,181.25, 68.75, 68.75);
	mango13 = new mango(1145.625,181.25, 68.75, 68.75);
	mango14 = new mango(1076.875,181.25, 68.75, 68.75);
	mango9 = new mango(1008.125,181.25,68.75,68.75);

	mango15 = new mango(1283.125,112.5, 68.75, 68.75);
	mango16 = new mango(1214.375,112.5, 68.75, 68.75);
	mango17 = new mango(1145.625,112.5, 68.75, 68.75);
	mango18 = new mango(1076.875,112.5, 68.75, 68.75);

	mango19 = new mango(1214.375,43.75, 68.75, 68.75);
	mango20 = new mango(1145.625,43.75, 68.75, 68.75);
	

	
	ground = new Ground(1180,300,550,20);


	mango1n = new mango(820.625,337.5,68.75,68.75);
	mango2n = new mango(751.875,337.5, 68.75, 68.75);
	mango3n = new mango(683.125,337.5, 68.75, 68.75);
	mango4n = new mango(614.375,337.5, 68.75, 68.75);
	mango5n = new mango(545.625,337.5, 68.75, 68.75);
	mango6n = new mango(476.875,337.5, 68.75, 68.75);
	mango7n = new mango(408.125,337.5, 68.75, 68.75);
	mango8n = new mango(339.375,337.5, 68.75, 68.75);



	
	mango10n = new mango(751.875,268.75, 68.75, 68.75);
	mango11n = new mango(683.125,268.75, 68.75, 68.75);
	mango12n= new mango(614.375,268.75, 68.75, 68.75);
	mango13n = new mango(545.625,268.75, 68.75, 68.75);
	mango14n = new mango(476.875,268.75, 68.75, 68.75);
	mango9n = new mango(408.125,268.75,68.75,68.75);

	mango15n = new mango(683.125,200, 68.75, 68.75);
	mango16n = new mango(614.375,200, 68.75, 68.75);
	mango17n = new mango(545.625,200, 68.75, 68.75);
	mango18n = new mango(476.875,200, 68.75, 68.75);

	mango19n = new mango(614.375,131.25, 68.75, 68.75);
	mango20n= new mango(545.625,131.25, 68.75, 68.75);
	

	
	ground2 = new Ground(580,387.5,550,20);


	mango1m = new mango(1270.625,600,68.75,68.75);
	mango2m = new mango(1201.875,600, 68.75, 68.75);
	mango3m = new mango(1133.125,600, 68.75, 68.75);
	mango4m = new mango(1064.375,600, 68.75, 68.75);
	mango5m = new mango(995.625,600, 68.75, 68.75);
	mango6m = new mango(926.875,600, 68.75, 68.75);
	mango7m = new mango(858.125,600, 68.75, 68.75);
	mango8m = new mango(789.375,600, 68.75, 68.75);



	
	mango10m = new mango(1201.875,531.25, 68.75, 68.75);
	mango11m = new mango(1133.125,531.25, 68.75, 68.75);
	mango12m = new mango(1064.375,531.25, 68.75, 68.75);
	mango13m = new mango(995.625,531.25, 68.75, 68.75);
	mango14m = new mango(926.875,531.25, 68.75, 68.75);
	mango9m = new mango(858.125,531.25,68.75,68.75);

	mango15m = new mango(1133.125,462.5, 68.75, 68.75);
	mango16m = new mango(1064.375,462.5, 68.75, 68.75);
	mango17m = new mango(995.625,462.5, 68.75, 68.75);
	mango18m = new mango(926.875,462.5, 68.75, 68.75);

	mango19m = new mango(1064.375,393.75, 68.75, 68.75);
	mango20m = new mango(995.625,393.75, 68.75, 68.75);
	

	
	ground3 = new Ground(1030,650,550,20);

	stone = new Stone(200,410,60);

	sling = new Launcher(stone.body,{x:100,y:410});

	score = 0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  


mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();
mango13.display();
mango14.display();
mango15.display();
mango16.display();
mango17.display();
mango18.display();
mango19.display();
mango20.display();
ground.display();

mango1n.display();
mango2n.display();
mango3n.display();
mango4n.display();
mango5n.display();
mango6n.display();
mango7n.display();
mango8n.display();
mango9n.display();
mango10n.display();
mango11n.display();
mango12n.display();
mango13n.display();
mango14n.display();
mango15n.display();
mango16n.display();
mango17n.display();
mango18n.display();
mango19n.display();
mango20n.display();
ground2.display();

mango1m.display();
mango2m.display();
mango3m.display();
mango4m.display();
mango5m.display();
mango6m.display();
mango7m.display();
mango8m.display();
mango9m.display();
mango10m.display();
mango11m.display();
mango12m.display();
mango13m.display();
mango14m.display();
mango15m.display();
mango16m.display();
mango17m.display();
mango18m.display();
mango19m.display();
mango20m.display();
ground3.display();


sling.display();
stone.display();

fill ("red");
text ("Score: "+score,100,100);
 
}

function detectCollision(lstone,lmango){
	mangoBodyPos = lmango.body.position;
	stoneBodyPos = lstone.body.position;

	var distance = dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y);
	if (distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		score += 1;
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:100,y:200});
		sling.attach(stone.body);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y: mouseY});
}

function mouseReleased(){
	sling.fly();
}



