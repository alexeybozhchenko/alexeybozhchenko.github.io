var flag = 0;
var text = document.getElementById("spoilerText");
var button = document.getElementById("spoilerButton");
text.style.height = "0px";
text.style.overflow = "hidden";
function spoiler() {            
if(flag == 0 ) {
    text.style.height = "100px";
    text.style.overflow = "inherit";
    flag = 1;	
}
     else {
         text.style.height = "0px";
         text.style.overflow = "hidden";
         flag = 0;
    }
}