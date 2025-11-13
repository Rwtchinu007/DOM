var h1 = document.querySelector("h1")
var inc = document.querySelector(".inc")
var dec = document.querySelector(".dec")
var count = 0

inc.addEventListener("click",function(){
    count++
    console.log(count)
    h1.innerText = count
})

dec.addEventListener("click",function(){
    count--
    console.log(count)
    h1.innerText = count
})