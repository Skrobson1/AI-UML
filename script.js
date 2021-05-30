var pX;
var pY;

function init() {
    var canv = document.getElementById("canv");
    document.querySelector(".res").addEventListener('click', clear);
    document.querySelector(".br").addEventListener('click', breakLine);
    canv.width  = 1920;
    canv.height = 800;
    pX = 0;
    pY = 0;
    canv.addEventListener('click', draw);
}

function draw(e) {

    var x = e.clientX;
    var y = e.clientY;
    
    var canv = document.getElementById("canv");
    if (canv.getContext) {
      var ctx = canv.getContext('2d');
      ctx.fillRect(x-25,y-25,50,50);
      if(pX != 0) {
        ctx.beginPath();
        ctx.moveTo(pX,pY);
        ctx.lineTo(x,y);
        ctx.stroke();
      }
      pX = x;
      pY = y;
    }
  }

  function clear() {
    pX=0;pY=0;
    if (canv.getContext) {
        ctx = canv.getContext('2d');
        ctx.clearRect(0, 0, 1920, 800);
    }
  }
  function breakLine() {
      pX=0;pY=0;
  }

  window.addEventListener("load", init);