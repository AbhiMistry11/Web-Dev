// const URL = "https://cat-fact.herokuapp.com/facts";
// const factpara = document.querySelector("#para");
// const getBtn = document.querySelector("button");
 
const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";
const factpara = document.querySelector("#para");
const getBtn = document.querySelector("button");
// const getFacts = async ()=>{
//     console.log("Getting Data....")
//     let Response = await fetch(URL);
//  console.log(Response);
//     let data = await Response.json();
 
//    factpara.innerText = data[0].text;
//  }

function getFacts(){
    fetch(URL)
    .then((Response)=>{
        return Response.json();
    })
    .then((data)=>{
        console.log(data);
        //let randomIndex = Math.floor(Math.random() * data.length);
        factpara.innerText = data.text;
    })
}

 getBtn.addEventListener('click',getFacts);



//  const URL2 = "https://icanhazdadjoke.com/j/8hFYojqz5h";

//  const getFacts2 = async ()=>{
//         console.log("Getting Data....")
//         let Response2 = await fetch(URL2);
//      console.log(Response2);
//      let data2 = Response2.json();
//      console.log(data2);
//     };

// const URL2 = "https://icanhazdadjoke.com/j";

// const getFacts2 = async () => {
//     console.log("Getting Data....");

//     let Response2 = await fetch(URL2, {
//         headers: { "Accept": "application/json" } // Ensuring JSON response
//     });

//     console.log(Response2); 

//     let data2 = await Response2.json(); // Await here
//     console.log(data2); // This will now log actual JSON data
// };



