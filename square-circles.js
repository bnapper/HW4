 createCanvas(400, 400);
}

var x = [0]; // new empty array
var y = [0]; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 6; i < x.length; i = i + 6) {
    rect(x[i], y[i], 1 + (x.length - i), 55);
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
