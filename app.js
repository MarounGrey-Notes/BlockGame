//Accessing canvas
var canvas = document.getElementById('grid');
var ctx = canvas.getContext('2d');

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

var length = 60;
// Starting coordinates
var posX = 0;
var posY = 8 * length;
var objects = [];

function moveRows(){
  for(var i = 0; i < objects.length; i++){
    // remove old objects
    removeCell(objects[i][0], objects[i][1]);
    // move objects
    objects[i][1] -= length;
  }

  drawingGrid();

  for(var i = 0; i < objects.length; i++){
    // redraw objects on new location
    drawCell(objects[i][0], objects[i][1]);
  }
}
// Spawn random amount of blocks on the field
function gener(){
  posX = length*Math.floor(8*Math.random());
}

  function spawnRandomObject() {

    // Game Object
    drawCell(posX, posY);
    objects.push([posX, posY]);
  }

function drawCell(x, y, color){
    ctx.fillStyle = "#f2a365";
    ctx.globalCompositeOperation = "destination-over";
    ctx.beginPath();
    ctx.fillRect(x, y, length, length);
    ctx.stroke();
}

function removeCell(x, y){
    ctx.clearRect(x, y, length, length);
}

// Blocks moving up
document.getElementById("button").addEventListener("click", function(){
  // Spawn random amount of objects
  moveRows();
  for (var i=0; i<Math.floor((Math.random()*8)+1)*2; i++){
    gener();
    spawnRandomObject();

  }
});
