var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");
ctx.fillStyle = grd;
ctx.fillRect(25,10,150,80);