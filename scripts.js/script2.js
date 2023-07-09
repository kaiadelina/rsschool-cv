var canvasD = document.getElementById('d');
var ctxD = canvasD.getContext('2d');
canvasD.width = document.getElementById('right-column').clientWidth - 40; // учитываем отступы и padding
canvasD.height = window.innerHeight;

    if (!ctxD) {
      console.log('Error: Unable to get context for canvas');
    }

// Setting the width and height of the canvas
canvasD.width = window.innerWidth;
canvasD.height = window.innerHeight;

// Setting up the letters
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvasD.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctxD.fillStyle = 'rgba(0, 0, 0, .1)';
  ctxD.fillRect(0, 0, canvasD.width, canvasD.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctxD.fillStyle = '#0f0';
    ctxD.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvasD.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);