const colors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
const btn = document.querySelector("#btn");
const display = document.querySelector("#id");

const randomColor = () => Math.floor(Math.random() * colors.length);

const generateColor = () =>{
    let hexcode = "#";
    for(let i=0; i<6; i++){
        hexcode += colors[randomColor()]
    }
    document.body.style.background = hexcode;
    display.innerHTML = hexcode;
}
btn.addEventListener("click",generateColor);