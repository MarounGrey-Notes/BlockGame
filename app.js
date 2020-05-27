//Accessing canvas
var canvas = document.getElementById('grid');
var ctx = canvas.getContext('2d');

// context.fillStyle = '#ececec';
// context.fillRect(0, 0, canvas.width, canvas.height);

var w = ctx.canvas.width;
var h = ctx.canvas.height;

// Drawing grid
var drawingGrid = function() {

  for (x = 0; x <= w; x += 60) {
    for (y = 0; y <= h; y += 60) {

      // Gray grid
      ctx.globalCompositeOperation = 'destination-over';
      ctx.strokeStyle = "#cccccc";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);

      if (x % 240 === 0) {
        // Black X-axis grid |
        ctx.globalCompositeOperation = "source-over";


        if (x === 0 || x === 480) {
          ctx.lineWidth = 5;
        } else {
          ctx.lineWidth = 1;
        }
        // Middle vertical line
        if (x === 240) {
          // 0-480
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, 480);
          ctx.strokeStyle = "#222831";
          ctx.stroke();

          // 480-560
          ctx.beginPath();
          ctx.moveTo(x, 480);
          ctx.lineTo(x, 540);
          ctx.strokeStyle = "#cccccc";
          ctx.globalCompositeOperation = 'destination-over';

        } else {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.strokeStyle = "#222831";
        }



      } else if (y % 240 === 0 || y === 540) {
        // Black Y-axis grid _
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "#222831";

        if (y === 0 || y === 540) {
          ctx.lineWidth = 5;
        } else if (y === 480) {
          ctx.lineWidth = 2.5;
        } else {
          ctx.lineWidth = 1;
        }

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(h, y);

      }
      ctx.stroke();
    }
  }



};

drawingGrid(480, 540, 'grid');



// Game Objects
var drawSquare = function() {
  ctx.fillStyle = '#f2a365';
  ctx.globalCompositeOperation = "destination-over";
};
drawSquare();

var objects=[];
var spawnLineY = 540;


// Random Generation
function spawnRandomObject() {

  // Random X coordinates
  var numberArray = [0, 60, 120, 180, 240, 300, 360, 420];
  var randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];


  var object = {
    type: drawSquare(),
    x: randomNumber,
    y: spawnLineY
  };
objects.push(object);
}
