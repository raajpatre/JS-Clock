let hr=document.getElementById("hr")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let bg=document.querySelector("main")

function update(){
    let a= new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds(); 
    let r=Number.parseInt(Math.random()*257);
    let g=Number.parseInt(Math.random()*257);
    let b=Number.parseInt(Math.random()*257);
    console.log(r,g,b);
    hr.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    bg.setAttribute(`style`,`background-color:rgb(${r},${g},${b})`);
}

setInterval(update,1000)