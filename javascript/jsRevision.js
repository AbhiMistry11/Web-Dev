// console.log("Hello Kaise Ho");

//object/type/value

// const student = {
//     fullName : "Abhi Mistry",
//     age : 21,
//     cgpa : 8.9,
//     isPass : true, 
// };
// student["age"] = student["age"] + 1;
// console.log(student["age"]);

//question 1

// const Profile = {
//     userName : "@ShradhaKhapara",
//     isFollow : false,
//     Followers: "569K",
//     Following: 4,
// };

// console.log(Profile);
// console.log(typeof Profile["isFollow"]);

//operators and conditonal statements

//arithmatic operators

// let a = 8;
// let b = 2;

// console.log("a =",a,"& b=",b);
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a ** b = ",a**b);/

//unary operators
// let a = 8;
// let b = 2;
// a++;
// b--;
// console.log("a =",a,"& b=",b);

//assigment operators

// let a = 8;
// let b = 2;

// a **= 3;
// console.log("a =", a);

//comparison operators

// let a = 8;
// let b = 2;

// console.log("8 != 2",a != b);

//logical operators

// let a = 8;
// let b = 2;

// let cond1 = a>b;
// let cond2 = a===7;

// console.log("cond1 && cond2 = ",cond1 && cond2);
// console.log("cond1 || cond2 = ",cond1 || cond2);
// console.log("cond1 != cond2 = ",cond1 != cond2);
// console.log("cond1 == cond2 = ",cond1 == cond2);
// console.log("!(a<b) =", !(a>b));

//conditional operators

// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color="blue";
    
// }
// if(mode ==="white"){
//     color="red"; 
// }
// else{
//     color="white"
// }
// console.log(color);

// let a = 6;

// if(a % 2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// };

//practice 

// let num = prompt("enter number:");

// if(num%5===0){
//     console.log(num,"Multipal of 5");
// }
// else{
//     console.log(num,"not multipal of 5");
// }

// let num = prompt("Enter Grades Marks :")
// let grade;

// if(80<=num && num<=100){
//     grade = "A";
// }
// else if(70<=num && num<=79){
//     grade = "B";
// }
// else if(60<=num && num<=69){
//     grade = "C";
// }
// else if(50<=num && num<=59){
//     grade = "D";
// }
// else if(0<=num && num<=49){
//     grade = "F";
// }
// console.log("According to your marks, your grade was =",grade);

//calculate loop

// let sum = 0;
// for(let i=1;i<=5;i++){
//     sum = sum+i;
//     console.log("sum =",sum);
// }

//practice loop

// for(let num=0;num<=100;num++){
//     if(num%2 ===0){
//         console.log("num =",num);
//     }
// }

//practice q2

// let gameNum = 30;
// let userNUm = prompt("Guess the game number :");

// while(gameNum != userNUm){
//     userNUm = prompt("you entered wrong number, guess again :")
// }
// console.log("Congratulation, you entered the right number.");

//practice str

// let fullName = prompt("enter your full name with no spaces");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

//practice Q

// let marks = [85,97,44,37,76,60];

// let sum = 0;
// for(let val of marks){
//     sum+=val;
// }
// let avg = sum / marks.length;
// console.log("avg marks of exam =",avg);

//practice Q

// let items = [250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i]-=offer;

// }
// console.log(items);

//Practice Q

// let storeComp = ["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// storeComp.shift();
// // console.log(storeComp);
// storeComp.splice(1,1,"ola");
// // console.log(storeComp);
// storeComp.push("amazon");
// console.log(storeComp);

//function Q

// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         {
//             count++;
//         }
//     }
//     return count;
// }

//forEach /callback

// let sums = [2,3,4,5,6];

// sums.forEach((nums) =>{
//     console.log(nums*nums);
// });

//practice Q

// let n = prompt("enter a number :");

// let arr = [];

// for(let i=1;i<=n;i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res , curr)=>{
//     return res + curr;
// });

// console.log(sum);

// let fact = arr.reduce((res,curr)=>{
//     return res * curr;
// });
// console.log(fact);

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modeBtn.addEventListener("click", () =>{
//     if (currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })

//settimeout

// setTimeout(()=>{
// console.log("hello");
// },5000);

// function getData(dataId, getNextData){
//     setTimeout(() =>{
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }
//callback hell

// getData(1,()=>{
//     getData(2,() =>{
//         getData(3);
//     });
// });

