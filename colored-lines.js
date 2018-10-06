function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100, 300);
}

function draw() {
  background(255);
  fill(255,0,300)
		
	for (var i = 5; i < 100; i++) 

		
  for (var x = 10; x < width-10; x = x + 10) {
    line(x, height/2, mouseX, mouseY);
  }
}
