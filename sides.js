class Side{

    constructor(x,y,width,height){

        var side_options={

            isStatic:true

        }
    
        this.body=Bodies.rectangle(x,y,width,height,side_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }

    display(){

        var pos=this.body.position;

        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);

    }
}