color = ["red", "yellow", "green", "coral", "orange", "fuscia"];

els = document.getElementsByTagName("p");

window.setInterval(function() {
  myfunc();
}, 1000);

function myfunc() {
  els[Math.floor(Math.random() * 4)].style.color =
    color[Math.floor(Math.random() * 6)];
}
