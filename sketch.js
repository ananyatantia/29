var block1,block2,block3,block4,block5,block6,block7,block8,block9
var polygon
function setup(){
block1 = new Block(10,10)
block2 = new Block(20,10)
block3 = new Block(30,10)
block4 = new Block(40,10)
block5 = new Block(50,10)
block6 = new Block(60,10)
block7 = new Block(70,10)
block8 = new Block(80,10)
block9 = new Block(90,10)
polygon = new Polygon(10,10)
}
function draw(){
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
polygon.display()
}