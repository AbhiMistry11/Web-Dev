let cont=document.querySelector('#cont');
let circle=document.querySelector('#circle');
circle.innerText="OFF";

cont.addEventListener('click', ()=>{
    if(circle.style.backgroundColor=="red"){
        cont.classList.remove("shd1");
        circle.classList.add("mov");
        cont.classList.add("shd2");
        circle.style.backgroundColor="green";
        circle.innerText="ON";
    }
    else{
        cont.classList.remove("shd2");
        circle.classList.remove("mov");
        cont.classList.add("shd1");
        circle.style.backgroundColor="red";
        circle.innerText="OFF";
    }
})