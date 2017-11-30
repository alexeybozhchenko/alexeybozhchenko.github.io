var flag = 0;
function spoiler() {
var text = document.getElementById("spoilerText");
var button = document.getElementById("spoilerButton");
               
if(flag == 0 ) {
    text.style.height = "100px";
    text.style.overflow = "block";
    flag = 1;	
}
     else {
         text.style.height = "0px";
         text.style.overflow = "hiden";
         flag = 0;
    }
}