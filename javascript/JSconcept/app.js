// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//    return new Promise((resolve, reject) => {
//      setTimeout(()=>{
//         h1.style.color = color;
//         resolve("color changed");
//     },delay);
//    });
// }

// changeColor("red",1000)
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(() =>{
//     console.log("orange color was completed");
//     return changeColor("yellow",1000);
// })
// .then(() =>{
//     console.log("yellow color was completed");
//     return changeColor("blue",1000);
// })
// .then(() =>{
//     console.log("blue color was completed");
    
// })

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



// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()* 10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }
// let btn = document.querySelector("button");

// btn.addEventListener("click", async()=>{
//  let fact = await getFacts();
//  let para = document.querySelector("#result");
//  para.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;

//     } catch(e){
//         console.log(e);
//         return "not found";
//     }
// };

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("error = ",err);
// });

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch(e){
//         console.log(e);
//     }

//     console.log("byeee....");
// };


let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getCollege(country);
    show(colArr)

})

function show(colArr){
    let list = document.querySelector("#result");
    list.innerText = "";

    for(col of colArr){
        // console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log(e);
        return [];
    }
}