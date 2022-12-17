let y=0
let x=0
let w=400
let h=400
let l=40

function setup(){
	createCanvas(w,h)
	background("220")

}

function draw(){
	
	let r=random()
	if (r>0.5) {
		fill(0)
		square(x ,y, l)
		fill(255)
		circle(x+l/2,y+l/2,l/2)

	}
	else{
		fill(255)
		square(x ,y, l)
		fill(0)
		circle(x+l/2,y+l/2,l/2)
	}
	

   
	x=x+l
	if (x>=400){
		x=0
		y=y+l
	}
}