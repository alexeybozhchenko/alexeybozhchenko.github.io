document.addEventListener("DOMContentLoaded", function(event) { 
  var tr = document.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
      tr[i].addEventListener("mouseover", function() {
          this.style.backgroundColor = "#8888FF";
      });

      tr[i].addEventListener("mouseout", function() {
          this.style.backgroundColor = "transparent";
      });
  }
});