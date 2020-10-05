class Tree {
    constructor(x,y,width,height){
        var options = {
             isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
    }
    display(){
       push();
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, 560, 560);
       pop();
    }
}