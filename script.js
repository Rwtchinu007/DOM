// var a = Math.random();// range 0 to 1
// console.log(a);
// var b = Math.floor(a * 10);// range 0 to 9
// console.log(b);


var btn = document.querySelector("button")
var box = document.querySelector(".box")

btn.addEventListener("click",function(){
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    // console.log("hello");
})


var arr = ["Amit","Sumit","Rajat","Sourav","Ankit","Satvik","Ramesh"];
var a = Math.floor(Math.random()*arr.length);
console.log(arr[a]);