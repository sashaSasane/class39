var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1IMG, car2IMG, car3IMG, car4IMG; 
var groundIMG, trackIMG; 
var form, player, game;

var cars, car1, car2, car3, car4;
 
// relative path - always use. what path code is in 
// absolute path - according to this device/  others don't work 
function preload(){
  trackIMG = loadImage("images/track.png");
  groundIMG = loadImage("images/ground.png");
  car1IMG = loadImage("images/car1.png");
  car2IMG = loadImage("images/car2.png");
  car3IMG = loadImage("images/car3.png");
  car4IMG = loadImage("images/car4.png");
  
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 ){
    game.end()


  }

}

