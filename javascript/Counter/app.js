let count = document.querySelector("#count");
let box = document.querySelector("#box");
let count2 = document.querySelector("#count2");
let count3 = document.querySelector("#count3");

 setInterval(()=>{
   
if( document.body.style.backgroundColor == "cyan"){
    document.body.style.backgroundColor = "blue";
}
else{
    document.body.style.backgroundColor = "cyan";
}
},2000)
 //console.log();
//let increas = 0;
count.addEventListener('click',()=>{
  
    box.innerText = Number(box.innerText)+1;
    box.style.color = "blue";

    
  })  
  count2.addEventListener('click',()=>{
  
    box.innerText = Number(box.innerText)-1;
    box.style.color = "red";
    
  })
  count3.addEventListener('click',()=>{
  
    box.innerText = "0";

    
  })    