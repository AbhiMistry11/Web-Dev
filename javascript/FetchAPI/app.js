const URL = "https://cat-fact.herokuapp.com/facts";
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
        let randomIndex = Math.floor(Math.random() * data.length);
        factpara.innerText = data[randomIndex].text;
    })
}

 getBtn.addEventListener('click',getFacts);