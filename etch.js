let input = parseInt(prompt("How many pixels do you want? (max.100)"));
while (input>100){ input = parseInt(prompt("Choose a number between 0 and 100."))}


let n = input*input;
pixels(n)
color()

function pixels(){
    let container= document.querySelector(".container");
    let maxWidth = 960;
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
}


function color(){
    let pixels = Array.from(document.querySelectorAll(".pixel"));
    pixels.forEach(pixel => pixel.addEventListener("click", percent))
    function percent (){
        let currColor = this.style.backgroundColor;
        let color = gradient(currColor)
        this.style.backgroundColor = color;
    }
    pixels.forEach(pixel => pixel.addEventListener("mouseleave", mouseEnter))
    function mouseEnter(){
        pixels.forEach(pixel => pixel.addEventListener("mouseenter", percent))
    }
}




let reset = document.querySelector(".reset");
    reset.addEventListener("click", remove);
function remove (){
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

