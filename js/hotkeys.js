var key = new Array();
key['i'] = "index.html";
key['s'] = "prof_skills.html";
key['h'] = "hobbies.html";
key['p'] = "plans.html";
key['a'] = "ai.html";
key['b'] = "blog.html";

function getKey(keyStroke) {
isNetscape=(document.layers);
eventChooser = (isNetscape) ? keyStroke.which : event.keyCode;
which = String.fromCharCode(eventChooser).toLowerCase();
for (var i in key) if (which == i) window.location = key[i];
}
document.onkeypress = getKey;