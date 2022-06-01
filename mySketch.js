var inoutElement
var txts = []
var colors = "cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("")
	inputElement.position(50,50)
	inputElement.style("front-size",'40px')
	inputElement.style("colors","blue")
	inputElement.input(userInput)
	/*sliderElement= createSlider(-1,1,0.2,0.1)
	sliderElement.position(50,100)
	sliderElement.input(setGravitiy)*/
	
}
function userInput(){
	txts.push({
		text: this.value(),
		x: width/2,
		y: 50,
		vx:random(-1,1),
		vy:1,
		color : random(colors)
	})
	this.value('')
	print (txts)
}
function draw() {
	background(255)
	fill(255)
	textSize(50)
	for(var i=0;i<txts.length;i++){
		let txt=txts[i]
		fill(txt.color)
		text(txt.text,txt.x,txt.y)
		txt.x= txt.x + txt.vx
		txt.y= txt.y + txt.vy
		txt.vy= txt.vy + 0.1//往下速率vy,再加0.1
		txt.vx= txt.vx * 0.999
		txt.vy= txt.vy * 0.999
		if(txt.y>height){
			txt.vy =-abs(txt.vy) //abs曲絕對值
		}
	}
}