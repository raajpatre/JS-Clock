let hr=document.getElementById("hr")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
function update(){
    let a= new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds(); 
    hr.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
}

setInterval(update,1000)