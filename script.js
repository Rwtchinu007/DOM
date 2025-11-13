// DOM - Document Object Model
// dom has 4 pillars
// 1. Selection of an element
// 2. changing Html
// 3. changing CSS
// 4. Event listeners

// we use camelcase for js properties instead of hyphens
// 1. Selection of an element
var h1 = document.querySelector("h1");
// changing html
h1.innerHTML = "Hello World!";
console.log(h1);
// changing css
h1.innerHTML = "Hello DOM!";
h1.style.color = "yellow";
h1.style.textAlign = "center";
h1.style.backgroundColor = "black";
h1.style.fontSize = "50px";

var box = document.querySelector(".box");
box.innerHTML = "<p>This is a box</p>";
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "lightblue";


// Event listeners
h1.addEventListener("click",function(){
    h1.innerHTML = "I am Batman"
    h1.style.color = "purple"
})

// getting element by ID
var h2 = document.getElementById("meow");
h2.style.color = "green";
h2.style.textAlign = "center";
h2.style.fontFamily = "sans-serif";


// selecting all query
var h3 = document.querySelectorAll("h3");
for(var i=0;i<h3.length;i++){
    h3[i].style.color = "orange";
    h3[i].style.textAlign = "center";
    h3[i].style.fontFamily = "verdana";
}

// difference between innerHTML and textContent is that innerHTML can parse HTML tags whereas textContent only adds text


