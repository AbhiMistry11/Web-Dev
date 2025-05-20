let h1 = document.querySelector("h1");

function changeColor(color,delay){
   return new Promise((resolve, reject) => {
     setTimeout(()=>{
        h1.style.color = color;
        resolve("color changed");
    },delay);
   });
}

changeColor("red",1000)
.then(() =>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(() =>{
    console.log("orange color was completed");
    return changeColor("yellow",1000);
})
.then(() =>{
    console.log("yellow color was completed");
    return changeColor("blue",1000);
})
.then(() =>{
    console.log("blue color was completed");
    
})

// changeColor("blue",1000,()=>{
//     changeColor("red",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("green",1000,()=>{
//                 changeColor("orange",1000)
//             })
//         })
//     })
// });



// changeColor("red",3000);
// changeColor("yellow",5000);



// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 5){
//             resolve("sucess : data was saved.");
//         }else{
//             reject("failure : weak connection");
//         }
//     });
// }

// savetoDb("Abhi Mistry")
// .then(()=>{
//     console.log("data1 saved");
//     return savetoDb("helloworld");
// })
// .then(()=>{
//     console.log("data2 saved");
//     return savetoDb("helloworld");
// })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });