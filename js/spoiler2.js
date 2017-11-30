var flag = 0;
function spoiler() {
var text = document.getElementById("spoilerText");
var button = document.getElementById("spoilerButton");
               
if(flag == 0 ) {
    text.style.height = "inherit";
    text.style.overflow = "inherit";
    flag = 1;	
}
     else {
         text.style.height = "0px";
         text.style.overflow = "hidden";
         flag = 0;
    }
}