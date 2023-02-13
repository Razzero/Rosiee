let intro = document.getElementById("1st");
let content = document.getElementById("2nd");

function first(){
  intro.style.opacity = "0"
  content.style.display = "block"
  setTimeout(function(){
    intro.style.display = "none"
    content.style.opacity = "1"
  },1000)
}