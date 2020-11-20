var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	

	/*World.add(world,side1)
	World.add(world,side2)
	World.add(world,side3)*/


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1,isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	side1=new Side(width/2,650,200,20);
	side2=new Side(300,610,20,100);
	side3=new Side(500,610,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  console.log(packageSprite.y);

  
  keyPressed();

  drawSprites();

  side1.display();
  side2.display();
  side3.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic((packageBody),false);
    
  }
}



