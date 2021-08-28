var boatSprite;
var boatanimation;
var seaImg;

function preload(){
  boatanimation=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
  seaImg=loadimage("sea.png"); 
  

}

function setup() {
  createCanvas(2050,2050);
 boatSprite=createSprite(750,450,20,50);
 boatSprite.addAnimation("boat", boatanimation);
}
       

function draw() {
  background("seaImg");
  drawSprites();
 
}