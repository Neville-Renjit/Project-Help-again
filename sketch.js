const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ball1,ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(210,360,10,50);
    box2 = new Box(270,360,10,50);
    box3 = new Box(240,375,50,10);
    ball1 = new Ball(200,200,1,1);
    ground1 = new ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    ball1.display();
    box1.display();
    box2.display();
    box3.display();
    ground1.display();
}