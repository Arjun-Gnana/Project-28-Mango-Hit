class Boy {
    constructor(x,y,width,height){
        var options = {
             isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/boy.png");
        World.add(world, this.body);
    }
    display(){
       push();
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, 250, 250);
       pop();
    }
}