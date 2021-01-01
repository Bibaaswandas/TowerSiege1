class Stone{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            friction: 1,
            restitution: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("unnamed.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var stonePos=this.body.position;
		push()
        translate(stonePos.x, stonePos.y);
        imageMode (CENTER);
        image (this.image,stonePos.x,stonePos.y,70,70);
		ellipseMode(CENTER);
		ellipse(0,0,this.r, this.r)
		pop()
    }
}