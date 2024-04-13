const box=document.querySelectorAll(".box");
const body=document.querySelector("body");

box.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target);
        if(e.target.id==="box1"){
            body.style.backgroundColor="blueviolet";
        }
        if(e.target.id==="box2"){
            body.style.backgroundColor="greenyellow";
        }
        if(e.target.id==="box3"){
            body.style.backgroundColor="red";
        }
        if(e.target.id==="box4"){
            body.style.backgroundColor="purple";
        }
        
    })
})