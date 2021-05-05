 const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var snowfall=[];
var bg;
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);


}

function preload(){
  bg  =  loadImage("snow2.jpg")
}

function draw() {

  background(bg);  
  Engine.update(engine);

 

  if(frameCount%80===0){
    snowfall.push(new snow(random(width/2-120, width/2+150), 10,30));
  }
 

// display snowfall
  for (var j= 0; j<snowfall.length; j++){
    snowfall[j].display();

  }

  drawSprites();
  
}