 //create vareable here
 var dog,sadDog,happyDog,database;
 var foods,foodstosk

 var foodObj 
 var addfood

 // create feed HERE 
 var feed,lastFeed 


 function preload()
 {
	//load images here
  sadDog = loadimage("doglmg.png");
  happy = loadimage("doglmg1.png");


 }

 function setup() {
	createCanvas(800, 700);
  datatbase = firebase.database();
  createCanvase(100,400);

  foodObj = new Food();
 
 foodstosk = database.ref("Food")
 foodStoke.on("va",readStoke)
 dog = createSprite(800,200,150,150);
 dog.addImage(sadDog);
 dog.scale = 0.15;

 // create food here

 addfood = createButton("add Food");
 addfood.position(800,95);
 addfood.mousePressed(addFoods);

 feed = createButton("Feed the dog")
 feed.position(700,95);
 feed.mousePressed(feedDog);

 }


 function draw() {  
 backgroud(120,301,130,);
 foodObj.display();

 //add feed time and feed here  
 fedTime = database.ref("FeedTime")
 feedTime.on("value",function(data){
 lastfed = data.val()

 }

 //write codes to display text function 
   fill(225,225,225)

  if(lastFeed>=12){
   text("last Feed"+ lastFeed%12+"PM",350,30)
 }else if(last==0){
   text("last feed: 12 AM",350,30)
 }else{
  text("last Feed"+ lastFeed%"PM",350,30)

 }

  database.ref("/").ubdate({
   food:foodObj.getFoodStoke(),
   feedTime:hour()

  })
  



 
  
  //add styles here

 function addFoods(){
 Foods++;
 database.ref("/").ubdate({

 Food:foods 
 })
 }

 drawSprites();




}



