//Q! average marks using reduce()
// let marks = [80,75,64,92,79];

// let avg = marks.reduce((sum, m) => sum +m, 0)/marks.length;//reduce adds all marks then divide by length
// console.log("Average Marks:",avg);

//Q2 filter even number

// let number = [1,2,3,4,5,6,7,8,9];

// let evens = number.filter(n => n % 2 === 0); //return only which divide by 21
// console.log(evens);

//Q3 Shopping cart total

// let cart = {
//     item: "Leptop",
//     price: 45000,
//     quantity: 2

// }
//     let total = cart.price * cart.quantity;
//     console.log("Total Bill:", total);

//Q4 movie list (add,remove,loop)

// let m = ["RRR","Inception","Pathaan"];

// m.push("Dangal");//add one movie
// m.pop();//remove last movie

// for (let n of m)
// {
//     console.log(n);
// }


// //Q5 JSON convert ->store->back to object
// let user = {name:"Aman", age:21, course:"JS"}; // object

// let jsonData = JSON.stringify(user);  // object → JSON string
// let backToObj = JSON.parse(jsonData); // JSON → object

// console.log(jsonData);
// console.log(backToObj);

//Q6 find Max (without Math.max)
// let arr = [10, 40, 25, 80, 15];  // array
// let max = arr[0];                // assume first is max

// for (let n of arr) {
//   if (n > max) max = n;          // update max
// }

// console.log("Max:", max);

//Q7
let names = ["ram","shyam","mohan"]; // array

let upper = names.map(n => n.toUpperCase()); // convert each to UPPER

console.log(upper);