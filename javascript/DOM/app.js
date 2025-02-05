// const blue = document.querySelector('#change'); 
// const red = document.querySelector('#submit'); 

// let currMode = "bg-blue-400";

// function changeColor() {
//     if (currMode === "bg-blue-400") {
//         currMode = "bg-red-400";
//         blue.classList.add("bg-red-400");
//         blue.classList.remove("bg-blue-400");

//         red.classList.add("bg-blue-400"); 
//         red.classList.remove("bg-red-400");
//     } else {
//         currMode = "bg-blue-400";
//         blue.classList.add("bg-blue-400");
//         blue.classList.remove("bg-red-400");

//         red.classList.add("bg-red-400"); 
//         red.classList.remove("bg-blue-400");
//     }
// }


// red.addEventListener('click', changeColor);

// setTimeout(myFunction, 5000);

// function myFunction() {
//   console.log("Kal Anaa Kal !!");
// }

async function getData() {
    setTimeout(function(){
        console.log("i am asynchrones block")
    },5000)
}
getData();