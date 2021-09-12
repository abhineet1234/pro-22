var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImage=loadAnimation("fairyImage1.png","fairyImage2.png")
	fairySound=loadSound("JoyMusic.mp3")
}

function setup() {
	createCanvas(400, 400);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
fairy=createSprite(130,320);
fairy.scale=0.1
fairy.addAnimation("fliyingfairy",fairyImage)
	star = createSprite(350,30);
	star.addImage(starImg);
	star.scale = 0.1;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(360 , 30 , 3 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if(star.y > 300 && starBody.position.y > 300){
Matter.Body.setStatic(starBody,true)
}
  drawSprites();

}

function keyPressed() {
	fairySound.play();
	if (keyCode===RIGHT_ARROW){

		fairy.x = fairy.x + 20;
	}

	if (keyCode===LEFT_ARROW){

		fairy.x = fairy.x - 20;
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	
}
