var dog,dog_Img;
var food_, food_Img;
var happyDog, happyDog_Img
var database = firebase.database();
var foodS = 20;
var lastFed = 0;
var foodStock;
var milk_1;
var food_Obj = null;
var checkFood, checkFood_Img;
var walk_1, walk_Img;
var wash, wash_Img;
var bed, bed_Img;
var vac, vac_Img;
var g,g_Img;

var button1, button2;


function preload()
{
dog_Img = loadImage("dogImg.png")
happyDog_Img = loadImage("dogImg1.png")
Img_1 = loadImage("Living Room.png");
food_Img = loadImage("food.png");
checkFood_Img = loadImage("Food Stock.png")
walk_Img = loadImage("running.png");
wash_Img = loadImage("Wash Room.png");
bed_Img = loadImage("Lazy.png");
vac_Img = loadImage("dogVaccination.png");
g_Img = loadImage("Garden.png")
}

function setup() {
  createCanvas(1000, 400);
  
  foodObj = new Food();

   bed = createSprite(500,200,20,20);
   bed.addImage(bed_Img);
   bed.scale = 0.3;
   bed.visible = false;

   g = createSprite(500,200,20,20);
   g.addImage(g_Img);
   g.scale = 0.5;
   g.visible = false;

  vac = createSprite(400,200,20,20);
  vac.addImage(vac_Img);
  vac.scale = 0.5;
  vac.visible = false;

  wash = createSprite(500,200,20,20);
  wash.addImage(wash_Img);
  wash.scale = 0.5;
  wash.visible = false;

  walk_1= createSprite(500,200,20,20);
  walk_1.addImage(walk_Img)
  walk_1.scale = 0.3;
  walk_1.visible = false;

  checkFood = createSprite(500,200,20,20);
  checkFood.addImage(checkFood_Img);
  checkFood.scale = 0.5;
  checkFood.visible = false;


  food = createSprite(600,260,20,20);
  food.addImage(food_Img);
  food.scale = 0.1;
  food.visible = false;

  
  dog = createSprite(500,200,20,20);
  dog.scale = 0.5
  dog.addImage(Img_1);
  dog.visible = true;

  happyDog = createSprite(700,210,20,20);
  happyDog.scale= 0.25;
  happyDog.addImage(happyDog_Img);
  happyDog.visible = false;

  button1=createButton("Feed the Dog");
  button1.position(1000,60);
  button1.mousePressed(feedDog);
 
  button2 = createButton("Add Food");
  button2.position(1100,60)
  button2.mousePressed(addFood);

  button3 = createButton("Check food stock")
  button3.position(1177.5,60);
  button3.mousePressed(foodStock)

  button4 = createButton("Take to walk");
  button4.position(1000,85);
  button4.mousePressed(walk);

  button5 = createButton("Take him to washroom");
  button5.position(1093.5, 85);
  button5.mousePressed(washroom);

  button6 = createButton("Check for Vaccination");
  button6.position(1000, 110);
  button6.mousePressed(vaccination);

  button7 = createButton("Take to Garden");
  button7.position(1150, 110);
  button7.mousePressed(garden);

  button8 = createButton("Take to Bed");
  button8.position(1000, 135);
  
  button8.mousePressed(sleep)

  var title = createElement('h2')
  title.html("Virtual Pet - Viktor")
  title.position(750, 0)
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}

function draw() {  
background(46,139,87);

fill("white");
textSize(15);
if(lastFed>=12){
  text("Last Fed : "+ lastFed%12 + " PM", 20,25);
 }else if(lastFed==0){
   text("Last Fed : 12 AM",20,25);
 }else{
   text("Last Fed : "+ lastFed + " AM", 20,25);
 }

 

//foodObj.display();
drawSprites();
textSize(15);
fill("white");
text("Food Remaining : " + foodS, 20,50)
}

function readStock(data){
foodS = data.val()
}

function writeStock(x){
if(x<=0){
x=0
}else{
x = x-1
}
database.ref('/').update({
Food:x
})
}

function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  
  happyDog.visible = true;
  dog.visible = false;
  food.visible = true;
  checkFood.visible = false;
  walk_1.visible = false;
  wash.visible = false;
  vac.visible = false;
  g.visible = false;
  bed.visible = false;
  foodS--;
  foodObj.updateFoodStock(foodS);
  lastFed = hour();
  foodObj.updateLastFed(lastFed);
  
}

function foodStock(){
dog.visible = false;
happyDog.visible = false;
food.visible  =false;
checkFood.visible = true;
walk_1.visible = false;
wash.visible = false;
vac.visible = false;
g.visible = false;
bed.visible = false;
}

function walk(){
dog.visible = false;
happyDog.visible = false;
food.visible  =false;
checkFood.visible = false;
walk_1.visible = true;
wash.visible = false;
vac.visible = false;
g.visible = false;
bed.visible = false;
}

function washroom(){
  dog.visible = false;
  happyDog.visible = false;
  food.visible  =false;
  checkFood.visible = false;
  walk_1.visible = false;
  wash.visible = true;
  vac.visible = false;
  g.visible = false;
  bed.visible = false;
}

function vaccination(){
  dog.visible = false;
  happyDog.visible = false;
  food.visible  =false;
  checkFood.visible = false;
  walk_1.visible = false;
  wash.visible = false;
  vac.visible = true;
  g.visible = false;
  bed.visible = false;
}

function garden(){
  dog.visible = false;
  happyDog.visible = false;
  food.visible  =false;
  checkFood.visible = false;
  walk_1.visible = false;
  wash.visible = false;
  vac.visible = false;
  g.visible = true;
  bed.visible = false;
}

function sleep(){
  dog.visible = false;
  happyDog.visible = false;
  food.visible  =false;
  checkFood.visible = false;
  walk_1.visible = false;
  wash.visible = false;
  vac.visible = false;
  g.visible = false;
  bed.visible = true;
}