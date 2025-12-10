//Sun Of Two Number
// let a=5,b=7;
// console.log(a+b);

// // print Hello
// let name="SHAURYA";
// console.log("Hello " +name);


//even/odd
//let n = 6;
//console.log(n % 2 === 0 ? "Even" : "Odd");

//celsius to fahrenheit
// let c = 30;
// console.log((c * 9/5) + 32);

// max amoung 3 no.
// console.log(Math.max(10, 5, 20));

// toggle boolean
// let x = true;
// x = !x;
// console.log(x);

// string length
//console.log("hello".length);

//concatenate string
//console.log("Hello"+ " World");

//positive and negative 
// let num = -3;
// console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");

// var,let,const
// var a = 10;
// let b = 20;
// const c = 30;

// multiple table
//for (let i = 1; i <= 10; i++) console.log(5 * i);

//sum of first 10 N no.
// let sum = 0;
// for (let i = 1; i <= 10; i++) sum += i;
// console.log(sum);

// switch day name
// let d = 3;
// switch(d){
//   case 1: console.log("Mon"); break;
//   case 2: console.log("Tue"); break;
//   case 3: console.log("Wed"); break;
// }

//function - factorial

// function fact(n){
//   let f = 1;
//   for(let i=1;i<=n;i++) f*=i;
//   return f;
// }
// console.log(fact(5));

//voting eligibility
// function vote(age){
//   return age >= 18 ? "Eligible" : "Not Eligible";
// }
// console.log(vote(17));

//prime no.
// function isPrime(n){
//   if(n < 2) return false;
//   for(let i=2; i<n; i++) if(n%i===0) return false;
//   return true;
// }
// console.log(isPrime(7));

//sum of digit
// let n = 123, s = 0;
// while(n){ s += n%10; n = Math.floor(n/10); }
// console.log(s);

//reverse string
// function rev(str){
//   let r = "";
//   for(let ch of str) r = ch + r;
//   return r;
// }
// console.log(rev("hello"));

//Grade
// let m = 82;
// console.log(m>=90?"A":m>=75?"B":m>=50?"C":"Fail");

//calculator function
// function calc(a, b, op){
//   if(op==="+") return a+b;
//   if(op==="-") return a-b;
//   if(op==="*") return a*b;
//   if(op==="/") return a/b;
// }
// console.log(calc(5, 3, "+"));

//count vowel
// function vowels(str){
//   let count = 0;
//   for(let ch of str) if("aeiouAEIOU".includes(ch)) count++;
//   return count;
// }
// console.log(vowels("hello"));

//fibonacci
// let n = 5, a=0, b=1;
// for(let i=1;i<=n;i++){
//   console.log(a);
//   let next = a + b;
//   a = b; b = next;
// }

//mim and max from array
// let arr = [3,7,1,9];
// console.log(Math.min(...arr), Math.max(...arr));

// switch menu
// let choice = 1, a=6, b=3;
// switch(choice){
//   case 1: console.log(a+b); break;
//   case 2: console.log(a-b); break;
//   case 3: console.log(a*b); break;
//   case 4: console.log(a/b); break;
// }

// Armstrong
function arm(n){
  let sum=0,temp=n;
  while(temp){
    let d = temp%10;
    sum += d*d*d;
    temp = Math.floor(temp/10);
  }
  return sum === n;
}
console.log(arm(153));