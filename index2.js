
var i = 0;
function change() {
  var doc = document.getElementById("biggus");
  var color = ["white", "blue", "brown", "green","yellow"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 100);

  
  