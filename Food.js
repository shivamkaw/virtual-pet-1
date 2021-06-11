 class Food{
   constructor(){
         this.foodStock = 0;
         this.lastfed;
         this.image = loadImage("Milk.png");

         }
          ubdateFoodStoke(FoodStoke){
         this.food = FoodStoke;
         }

      getFedTime(lastFed){
     this.lastfed = lastFed;
         
       }
      
            ductFood(){
          if(this.foodStock>0){
          this.foodStock = FoodStoke+1;
         }
         
    
         } 
 
 
         getfoodStoke(){
         return this.foodStock;


         }  
 
             display(){
              var x = 100,y = 80 

               ImageMode(CENTER);
               this.image(this.image,720,220,70,70);

                if(this.FoodStoke!= 0){
                 for(var i = 0;i<this.foodStock;i++){
                   if(i%10===0)
                    x=80;
                 y=y+50;
                 }

                 image(this.image,x,y,50,50);
                  x=x+30;

            }

        }

     }
 
 
 
 
 
    