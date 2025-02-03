// console.log("Hello World");

// const info = {
//     name : "abhi",
//     age : 22,
//     city: "mumbai",
//     email : "abhi@gmail.com"
// };
// console.log(info);
// console.log(typeof(info));
// console.log(info["city"]);
// if(info["city"] == "delhi"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
//loops and strings

// let number = 5;
// for(let i=0;i<number;i++){
//     console.log("Hello World");
// }

// let num = 6;
//for(let i=0;i<=6;i++){
//  console.log(i);
//}
// for(let i=0;i<=6;i++){
//     if(i==3)
//         continue;
//     else{
//         console.log(i);
//     }
// }
// let op1 = 'English';
// let op2 = 'Hindi';

// console.log(op1.length + op2.length);
// console.log(op1.toUpperCase() +' '+  op2.toUpperCase());
// console.log(op1.toLowerCase() +' '+  op2.toLowerCase());
// console.log(op1[0] + op2[0]);

// let str = 'AbhiMistry';
// console.log(str.substring(2));

// function PrintNumber(num){
//     console.log("Print Number is: " + num*num);
// }
// PrintNumber(7);

// function AvgNumber(num1,num2,num3){
//     let avg = (num1+num2+num3)/2;
//     console.log("Average is: " + avg);
// }
// AvgNumber(5,2,8);

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// getSum(2,3,4);
// let ans = getSum(2,3,4);
// console.log(ans);

// let GetMyName = (name1,name2) =>{
//     let ans = name1 +" "+ name2;
//     return ans;
// }
// console.log(GetMyName('Abhi','Mistry'));

// let obj ={
//     name: "Abhi",
//     age: 22,
//     city: "Mumbai",
//     height : "6ft 2in",
//     weight : "70kg",
//     Greet : function(){
//         console.log("Hello " + obj.city);
//     }
// }
// console.log(obj);
// obj.Greet();

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0)
//         continue;
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4,5,6,7];

// arr.push("Abhi");
// console.log(arr);
// arr.pop();
// console.log(arr);

// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;

// },0);
// console.log(ans);

// let arr = [10,20,30,40];

// arr.forEach((value,index)=>{
//     console.log("Number is: " + value + " at index: " + index);
// })

// let arr ="AbhiMistry";
// for(let val of arr){
//     console.log(val);
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let getSum = (arr) =>{
//     let sum = 0;
//     arr.forEach((value) =>{
//         sum+=value;

//     })
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);

// let age = prompt("Enter your age: ");

// if (age >=18){
//     console.log("you are eligible to vote");
// }

// else{
//     console.log("you are not eligible to vote");
// }
// console.log("Thank you");

// class Human {
//     age = 18;
//     #wt = "60kg";
//     ht = "6ft";

//     constructor(newAge,newHeight,newWeight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;

//     }

//     walking(){
//         console.log("i am walking ",this.#wt);
//     }

//     running(){
//         console.log("i am running");
//     }
//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifyValue(val){
//         this.#wt = val;
//     }
// }

// let obj = new Human(30,50,101);
// console.log(obj.age);
// console.log(obj.ht);

// console.log(obj.fetchWeight);

// obj.running();
// obj.walking();

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// function startGame(){
//     while (true) {
//         let userGuess = prompt("Guess a number between 1 and 100:");
    
//         if (userGuess === null) {
//             alert("Game cancelled!");
//             break;
//         }
    
    
//         if (userGuess < 1 || userGuess > 100) {
//             alert("Please enter a valid number between 1 and 100.");
//             continue;
//         }
    
//         if (userGuess == randomNumber) {
//             alert("😎😎Correct! You guessed the number!");
//             break;
//         } else if (userGuess > randomNumber) {
//             alert("Too high! Try again.");
//         } else {
//             alert("Too low! Try again.");
//         }
//     }
    
// }
