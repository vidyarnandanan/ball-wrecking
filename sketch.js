const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,box1,ball1
var box2
var rope1
var backimage
var backimage1

var ballwreck
function preload(){
backgroundimage=loadImage("crane.png")
ballwreckimage=loadImage("crane.png")

}


function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

   // ballwreck=Matter.Bodies.rectangle(200,200)
    ground=new Ground(400,390,800,20)
    box1=new box(380,360,50,50)
    box2=new box(380,350,50,50)
    box3=new box(380,300,50,50)
    ball1=new ball(600,200,20)
    box4=new box(450,360,50,50)
    box5=new box(450,350,50,50)
    box6=new box(450,370,50,50)
    rope1=new rope(ball1.body,{x:640,y:50})

    box7=new box(380,260,50,50)
    box8=new box(380,270,50,50)
    box9=new box(380,280,50,50)

    box10=new box(450,260,50,50)
    box11=new box(450,270,50,50)
    box12=new box(450,280,50,50)
    
    
}
function draw(){
    
    background(backgroundimage);
    Engine.update(engine);
 
    ground.display()
    box1.display();
ball1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display();
box1.display()
ball1.display()
box7.display()
box8.display()
box8.display()
box9.display()
box10.display();
box11.display()
box12.display()
rope1.display()
//image(ballwreckimage,ballwreck.position.x,ballwreck.position.y)
drawSprites()
}
function keyPressed() {
    if(keyCode===32){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:100})


    }
  }
  function mouseDragged() {
    Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
  }
  
  
