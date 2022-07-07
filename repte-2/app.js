let btn = document.getElementById("btn")
let xBtn = document.getElementById('xBtn')
let container = document.getElementById('container')
btn.addEventListener("click", disappear);
xBtn.addEventListener("click", close);


function disappear(){
container.style.display = "none"
localStorage.setItem("display", "none")
}


function close(){
container.style.display = "none"
}

container.style.display = localStorage.getItem("display") 


