class box{

    constructor(x,y,width,height){
        var options={
    
     restitution:0.7,
    density:0.5
    
        }
    
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.image=loadImage("stone1.png")
    World.add(world,this.body)
    this.width=width
    this.height=height
    this.visibility=255
    
    }
    display(){
        var pos=this.body.position
        if (this.body.speed<3){
          
   
            imageMode(CENTER)
            image (this.image,pos.x,pos.y,this.width,this.height)
        }
   else{
       World.remove(world,this.body)
       push ();
       this.visibility=this.visibility-5;
tint (255,this.visibility);
image (this.image,pos.x,pos.y,this.width,this.height);
pop ();
   }
    
    }
    
    }