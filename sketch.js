//Creating variables.
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var grass,grassImg;
var leaf,leafImg;
var orangeLeaf,orangeLeafImg;
var redLeaf,redLeafImg;
 
function preload(){
// Pre Loading all the Images.
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  orangeLeaf = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");
 
}
 
function setup(){
  createCanvas(400,400);
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  apple = createSprite(50,40,10,10);
  //creating rabbit running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
 
}
 
function draw() {
  background(0);
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges[2]);
  createApples();
  createLeaves();
  
  
  if (frameCount % 80 == 0) {
    if (createApples == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }
  drawSprites();
}
 
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.04
  apple.velocityY = 4;
 
  
}
 
function createLeaves() {
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.04
  leaf.velocityY = 4;
 
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.04
  orangeLeaf.velocityY = 4;
 
  redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale = 0.04
  redLeaf.velocityY = 4;
 
}
//Creating variables.
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var grass,grassImg;
var leaf,leafImg;
var orangeLeaf,orangeLeafImg;
var redLeaf,redLeafImg;
 
function preload(){
// Pre Loading all the Images.
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  orangeLeaf = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");
 
}
 
function setup(){
  createCanvas(400,400);
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  apple = createSprite(50,40,10,10);
  //creating rabbit running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
 
}
 
function draw() {
  background(0);
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges[2]);
  createApples();
  createLeaves();
  
 
  if (frameCount % 80 == 0) {
    if (createApples == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }
  drawSprites();
}
 
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.04
  apple.velocityY = 4;
 
  
}
 
function createLeaves() {
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.04
  leaf.velocityY = 4;
 
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.04
  orangeLeaf.velocityY = 4;
 
  redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale = 0.04
  redLeaf.velocityY = 4;
 
}
