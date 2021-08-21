var bg,sleep,brush,gym,eat,drink,move,background,astronaut,bath,edges;

function preload(){
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
move = loadAnimation("move.png")
bath = loadAnimation("bath1.png","bath2.png")
}
function setup() {
 
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1;
  
}

function draw() {
  createCanvas(800,400);
 
  
  background(bg);

  fill("white")
  textSize(15);
  text("Instructions :",200,10);
  text("up arrow = brushing",200,80);
  text("Down arrow = Gyming",200,60);
  text("left arrow = Bathing",200,40);
  text("Right arrow = eating",200,20);
  text("M = Moving",200,100)

  edges=createEdgeSprites(); 
  astronaut.bounceOff(edges);

  if (keyDown(UP_ARROW)){
    astronaut.addAnimation("Brushing",brush)
    astronaut.changeAnimation("Brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown(DOWN_ARROW)){
    astronaut.addAnimation("Gyming",gym)
    astronaut.changeAnimation("Gyming")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0

  }
  if (keyDown(LEFT_ARROW)){
    astronaut.addAnimation("Bathing",bath)
    astronaut.changeAnimation("Bathing")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("Eating",eat)
    astronaut.changeAnimation("Eating")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown("m")){
    astronaut.addAnimation("Moving",move)
    astronaut.changeAnimation("Moving")
    astronaut.velocityX = 1
    astronaut.velocityY = 1
  }

  drawSprites();
  
}