let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let inp = document.querySelector("input");

btn.addEventListener('click',()=>{
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");

    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click",(event)=>{
   if(event.target.nodeName == "BUTTON"){
    let ListItem = event.target.parentElement;
    ListItem.remove();
    console.log("clicked!!")
   }
})