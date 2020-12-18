class ball{

    constructor(x,y,radius){
        var options={
    
     restitution:1,
     density:1




     
    
    
        }
    
    this.body=Bodies.circle(x,y,radius,options)
    this.image=loadImage("basket.png")
    World.add(world,this.body)
    this.radius=radius
    
    
    }
    display(){
    var pos=this.body.position
   
    push()
     fill ("cyan")
    circle(pos.x,pos.y,this.radius*2)
    pop ();
    }
    
    }