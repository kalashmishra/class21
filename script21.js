var menu=document.querySelector("#menu");
var fs=document.querySelector("#fs");
var center=document.querySelector("#center")
flag=0
menu.addEventListener("click",function(){
    if(flag===0)
    {
    fs.style.top="0%"
    center.style.opacity="0"
    line1.style.rotate="45deg"
    line3.style.rotate="-45deg"
    line2.style.opacity="0"
    flag=1
    }else{
        fs.style.top="-100%"
center.style.opacity="1"
line1.style.rotate="0deg"
line3.style.rotate="0deg"
line2.style.opacity="1"
flag=0

    }




})