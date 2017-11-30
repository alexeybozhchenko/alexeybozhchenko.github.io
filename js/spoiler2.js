var flag = 0;
function spoiler() {
var text = document.getElementById("spoilerText");
var button = document.getElementById("spoilerButton");
               
if(flag == 0 ) {
    text.style.height = "300px";
    text.style.overflow = "scroll";
    flag = 1;	
}
     else {
         text.style.height = "0px";
         text.style.overflow = "hiden";
         flag = 0;
    }
}