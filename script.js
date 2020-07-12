window.addEventListener('load', start)

function start(){
  var red = document.querySelector("#red");
  var green = document.querySelector("#green");
  var blue = document.querySelector("#blue");
  var box = document.querySelector(".color")

  var val1 = document.querySelector("#val1");
  var val2 = document.querySelector("#val2");
  var val3 = document.querySelector("#val3");
  change = () =>{
    box.style.background = "rgb("+red.value+", "+green.value+", "+blue.value+")"
    val1.value = red.value
    val2.value = green.value
    val3.value = blue.value
  }
}