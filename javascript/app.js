//Arithmatic Operator

let a = 10;
let b = 5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(++a);
// console.log(a++);
// console.log(++a);
// console.log(a+=10);
// console.log(a>b);
// console.log(a<b);
// console.log(5>=5);
// console.log(5<=5);
// console.log('5' == 5);
// console.log('5' === 5);

// let age=25;
// let status1=(age>18) ? 'i can vote' : 'i cannot vote';
// console.log(status1);

// let ans=(true && true && true);
// let ans=(false || true || false);
// let ans=!(false);
// console.log(ans);

// let age = 13;
// if (age >=18){
//     console.log('vote')
// }
// else{
//     console.log('hatt bhosadike')
// }
// let num=3;

// switch(num){
//     case 1: console.log('A')
//     break;
//     case 2: console.log('B')
//     break;
//     case 3: console.log('C')
//     break;
//     case 4: console.log('D')
//     break;
//     case 5: console.log('E')
//     break;
//     default: console.log('F')
// }

// for (let i=2;i<=20;i=i+2){
//     console.log(i)
// }
// for (let i=5;i>=0;i--){
//     console.log(i)
// }

// for(i=1;i<=6;i++){
//     if(i==4){
//         break;
//     }
// else{
// console.log(i);
// }
// }

// let i=5;
// while(i>0){
//     console.log(i);
//     i--;
// }

// for(i=1;i<=6;i++){
//     if(i==4){
//     continue;
//     }
// else{
// console.log(i);
// }
// }

// let firstName=(`
//     my
//     name is
//     abhi mistry`);
//     console.log(firstName);

// let firstName= new String(`jod be`);
// console.log(firstName);

// let str=(`abhi mistry`);
// console.log(str.substring(2,4));

// let sentence = "Hello Jee Kaise ho saare";
// let words = sentence. split(' ')
//     console.log (words) ;

// function defination
// function sayMyname() {
//     console.log("Abhi Mistry")
// }

// function use - call function
// sayMyname();

// function Printcounting(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }

// Printcounting();

// function PrintNumber(num){
//     console.log("Print Number :", num);
// }

// PrintNumber(5);

// function getaverage(num1, num2){
//     let avg=(num1+num2)/2;
//     console.log("Average:",avg);
// }

// getaverage(6,83);

//return function

// function getSum(a,b,c){
//     let sum=(a+b+c);
//     return sum;
// }

// let ans= getSum(1,2,3);
// console.log("Printing Sum: ",ans);

// const getMultiplication = function (a,b){
//     return a*b;
// }

// let ans = getMultiplication(2,20);
// console.log(ans);

// let squareNumber = function(num){
//     let ans = num**2;
//     return ans;
// }

// let obj = {
//     name : "abhi",
//     age : 21,
//     weight : "60kg",
//     height : "6ft 1in",
//     greet: function(){
//         console.log("hello bhailog kaise ho");
//     }
// };

// for(let key in obj){
//     console.log(key,"",obj[key])
// };
// console.log(obj)
// obj.greet();

// console.log(typeof(obj));

//creation of arrays
// let arr = [1,2,3,4,5];
//array constructor
// let brr = new Array( 'love' , 1, true);
// brr.push("abhi");
// brr.pop();
// brr.shift();
// // brr.unshift("Leo");
// brr.push(20);
// brr.push(30);
// brr.push(50);
// console.log(brr.splice(2,3 ,'jod'));
// console.log(brr.slice(2,4));
// console.log(brr) ;
// console.log(typeof(brr));

// let arr = [100,200,300];

// let ansArray = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray);

// arr.map((number) => {
//     console.log(number+1);
// })

// let arr = [10,20,30,44,11,21,51];

// let evenArray = arr.filter((number) => {
//     if(number%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(evenArray);

// let arr = [1,2,3,'abhi','leo','jod',null];

// let evenArray = arr.filter((value) => {
//     if(typeof(value) == 'string'){
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(evenArray);

// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: ", length);
// //traditional loop

// for(let index=0;index<length; index++ ){
//     console.log(arr[index]);
// }

// arr.forEach((value, index) => (
//     console.log("number: ", value, " index: ", index)
// ));

// let arr = [10,20,30,40,50];

// let getSum = (arr) => {
//     let sum = 0;
//     arr.forEach((value) =>{
//         sum = sum+ value;
//     })
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans= solve(5);

// let finalAns = ans(11);
// console.log(finalAns);

// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];

// let first = arr[2]
// let ans = first(6,3)
// console.log(ans);

//math
// console.log("abhi");

// console.log(Math.PI);

// console.log(Math.max(60,30,54,69,289));

// console.log(Math.min(60,30,54,69,289));

// console.log(Math.round(1.6));

// console.log(Math.floor(1.9));

// let curr = new Date();

// console.log(curr);