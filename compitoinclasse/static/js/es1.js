
let l=50
let x
let y
w=400
h=400
x=0
y=0


function setup(){
createCanvas(w, h);
background ("black")
stroke("white")
}


function draw(){
let r= random()


if (r>0.5) {
 	line(x,y,x+l,y+l)
}


if (r<0.5) {
	line(x,y+l,x+l,y)
}
else{

}
x=x+l
if (x>=400) {
	x=0
	y=y+l
}
}
