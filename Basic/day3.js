// const double = (x) => x * 2;
// console.log(double(72)); 

// function double(x) {
//     return x * 2;
// }

// let ch = double(72);
// console.log(ch);

// let fruits = ["apple", "banana", "strawberry", "mango", "peach"]
// console.log(...fruits) // 
// // fruits.forEach(fruit => console.log(fruit))
// for(let fruit of fruits) {
//     console.log(fruit)
// }

// fruits.push("papaya")
// console.log(...fruits)

// fruits.pop()
// console.log(...fruits)

// fruits.unshift("kiwi")
// console.log(...fruits)

// fruits.shift()
// console.log(...fruits)

// let bananaExists = fruits.includes("mango")
// console.log(bananaExists)

// let index = fruits.indexOf("banana")
// console.log(index)

// let numbers = [1, 2, 3]
// console.log(numbers)
// let numbersDoubled = numbers.map(number => number*2)
// console.log(numbersDoubled)

// let numbers = [10, 25, 30, 40]
// console.log(numbers)
// let result = numbers.filter(number => number > 20)
// console.log(result)

// let nums = [2, 4, 6, 8]
// let doubled = nums.map(num => num*2)
// console.log(nums, doubled)

// let numbers = [10, 25, 30, 5, 60]
// let result = numbers.filter(num => num > 20)
// console.log(numbers, result)

// let numbers = [1, 2, 3, 4, 5]
// let sum = numbers.reduce((acc, num) => acc + num, 0)
// console.log(numbers, sum)

// let student = {
//     name: "SHAURYA",
//     age: 21,
//     course: "JavaScript"
// }
// console.log(student)

//student.city = "ALLAHABAD"
// console.log(student)

// delete student.age
// console.log(student)

// for(detail in student) {
//     console.log(detail, student[detail])
// }

let jsonString = JSON.stringify(student)
console.log(jsonString)
let jsonObject = JSON.parse(jsonString)
console.log(jsonObject)