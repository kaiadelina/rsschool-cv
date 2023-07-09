var canvasC = document.getElementById('c');
var ctxC = canvasC.getContext('2d');
canvasC.width = document.getElementById('left-column').clientWidth - 40; // учитываем отступы и padding
canvasC.height = window.innerHeight;

    if (!ctxC) {
        console.log('Error: Unable to get context for canvas');
      }

// Setting the width and height of the canvas
canvasC.width = window.innerWidth;
canvasC.height = window.innerHeight;

// Setting up the letters
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvasC.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctxC.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctxC.fillRect(0, 0, canvasC.width, canvasC.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctxC.fillStyle = '#0f0';
    ctxC.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvasC.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);