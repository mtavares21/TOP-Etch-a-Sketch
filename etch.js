let submit = document.querySelector(".submit");
let input = submit.addEventListener("click", pixels);
let colorType = "greyScale";


pixels()
color()


let rainbow = document.querySelector("#rainbow")
rainbow.addEventListener("click", saveAddColorRandom)
function saveAddColorRandom(){
    colorType = "rainbow";
    colorRandom()
    console.log(colorType)
}

let grey = document.querySelector("#gradient");
grey.addEventListener("click", saveAddColor)
function saveAddColor(){
    resetCallBack()
    colorType= "greyScale";
    pixels()
    console.log(colorType)
    
}

function pixels(){
    remove()
    let input = parseInt(document.querySelector("#input").value);
    if (input>100){
        alert("Too many pixels, lets stay at 100.")
        input=100
    }
    n = input*input;
    let container= document.querySelector(".container");
    let maxWidth = 700;
    let width = maxWidth/input + "px";
    while (n>0){
        pixel = document.createElement("div");
        pixel.className= "pixel";
        pixel.style.width=width;
        pixel.style.height=width;
        pixel.style.backgroundColor="rgb(184, 184, 184)"
       let add = container.appendChild(pixel);
        add += add + container.appendChild(pixel)
        n--
    }
    if (colorType ==="rainbow"){colorRandom()}
    if (colorType === "greyScale"){color()}
    
}
function remove(){
    let pixels = Array.from(document.querySelectorAll(".pixel"));
    pixels.forEach(pixel => pixel.remove())
    
}

function color(){
    resetCallBack()
    let pixels = Array.from(document.querySelectorAll(".pixel"));
    pixels.forEach(pixel => pixel.addEventListener("click", percent))
    function percent (){
        let currColor = this.style.backgroundColor;
        let color = gradient(currColor)
        this.style.backgroundColor = color;
    }
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", mouseEnter))
    function mouseEnter(){
        pixels.forEach(pixel => pixel.addEventListener("mouseenter", percent))
    }
}
function colorRandom(){
    let pixels = Array.from(document.querySelectorAll(".pixel"));
    pixels.forEach(pixel => pixel.addEventListener("click", color))
    function color (){
        let color = randomRGB()
        this.style.backgroundColor = color;
    }
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", mouseEnter))
    function mouseEnter(){
        pixels.forEach(pixel => pixel.addEventListener("mouseenter", color))
    }
}




let reset = document.querySelector(".reset");
    reset.addEventListener("click", resetCallBack);
function resetCallBack (){
        let pixels = Array.from(document.querySelectorAll(".pixel"))
        pixels.forEach((pixel) => pixel.style.backgroundColor = "rgb(184, 184, 184)")
    }

function randomRGB (){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return "rgb("+r+ ","+g+","+b+")"}

function gradient (currColor){
    if (currColor == "rgb(184, 184, 184)"){
        return "rgb(100,100,100)";
    }
    let arrayColor = currColor.match(/\d+/g);
    arrayColor.forEach(convert);
    function convert(match,index){
        match = parseInt(match);
        match -= 10; 
        arrayColor[index] = match;
            }
            return "rgb("+arrayColor[0]+ ","+arrayColor[1]+","+arrayColor[2]+")";
    }

