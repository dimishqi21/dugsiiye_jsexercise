// // let names = ["Burco", "Abdi", "Hassan", "Yusuf", "Mohamed"];
// // console.log(names)

// // // after push qofka ugu dambeeya ayaa lagu darayaa
// // names.push("Ali");
// // console.log(names)

// // // after pop qofka ugu dambeeya ayaa la tirtirayaa
// // names.pop();
// // console.log(names)

// // // unshift qofka ugu horeeya ayaa lagu darayaa
// // names.unshift("Abdirahman");
// // console.log(names)

// //     // after shift qofka ugu horeeya ayaa la tirtirayaa
// // names.shift();
// // console.log(names)  

// // //  length tirada elementiyada ku jira arrayga ayaa lagu soo bandhigayaa        
// // console.log(names.length)

// // object
// // let person = {
// //     name: "abdisamad",
// //     age: 25,
// //     city: "burco"
// // };  
// // // console.log(person .age)
// // // console.log(person .name)
// // // console.log(person .city)

// // // // sido kale waxa loso sara sida arrayga o kale
// // // console.log(person ["age"])
// // // console.log(person ["name"])
// // // console.log(person ["city"])

// // let person2 = {
// //     name: "Abdirahman",
// //     age: 30,
// //     city: "mogadishu",
// //   greet : function() {
// //      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");   
// //   } 
// // };  
// // console.log(person2 )
// // // marka apdate lagu sameynayo objectka

// // person2 .age = 35;
// // console.log(person2 )
// // //  marka apdate lagu sameynayo objectka        

// // person2 .birthdate = "1990-01-01";
// // console.log(person2 )
// // console.log(person2 .age)
// // console.log(person2 .name)
// // console.log(person2 .city)

// // console.log(person2 .greet())

// // array and object
// let person31 = ["Abdisamad", "Abdirahman", "Hassan", "Yusuf", "Mohamed"];
// let person3 = [ 
//     {

//     name: "Abdisamed",
//     age: 28, 
//     city: "Hargeisa",
//     class: "Computer Science"
// },   
// {
//     name:"abdirahman",
//     age: 30,
//     city: "Mogadishu",
//     class: "Information Technology"     
// }
// ]

// console.log(person3 [0].name)
// console.log(person3 [1].city)
// console.log(person3 [1])

// for loop
// mesha aad ka bilaabayso;
//  meesha aad ku joojinayso; 
//  meesha aad ku kordhinayso

// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }   

// const names = ["Abdisamad", "Abdirahman", "Hassan", "Yusuf", "Mohamed", "amaal"]
// console.log(names [0])
// console.log(names [1])
// console.log(names.length)
// console.log(names [3])
// for (let i = 0; i < names.length; i++) { 

// console.log(names [i])

// }

// let i = 0;
// while (i < 5) {
//     console.log("interation number: " + i);
//     i++;
// }
// let password;
//  do {
//     password = prompt("Please enter a password (at least 8 characters):");
//  }while(password !== "123")
//     console.log("Welcome user")

// const students = ["Abdisamad", "Abdirahman", "Hassan", "Yusuf", "Mohamed", "amaal"];

// for (let student of students){
//     console.log(student)
// }

// const languages = "javascript";

// for(let l)

//  if statement
// let age = 17;
// if (age >= 18) {
//     console.log("You are an adult.");
// //  else stateement 
// } else {
//     console.log("You are a minor.");
// }

// if exercise  16
// let score = 49;  // tusaale

// if (score >= 50) {
//   console.log("You passed!");
// } else {
//   console.log("You failed");
// }
// example
// let age = 20;
// if (age < 13) {
//     console.log("You are a child.");
// } else if (age < 20) {
//     console.log("You are a teenager.");
// } else {
//     console.log("You are an adult.");
// }
// // Output: You are an adult

// exercie17
// 
let temperature = 20; // you can change this value

if (temperature < 0) {
    console.log("Very cold");
} else if (temperature >= 0 && temperature < 15) {
    console.log("Cold");
} else if (temperature >= 15 && temperature < 25) {
    console.log("Warm");
} else {
    console.log("Hot");
}
// ternary operator
// exercise 18
let grade = 20; 
const message = grade >= 60? "pass." : "fail."

console.log(message);    

// and operatar 
// if(age >= 18){
//     console.log("you are an adult.")
// }
// const me =age >= 18 && "you are an adult."
// console.log(me)

// exercise 19
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});



// const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.map(num => num * 2);
// console.log(newNumbers) // Output: [2, 4, 6, 8]
// exercise 20
const fruits = ["apple", "banana", "cherry"];

const lengths = fruits.map(fruit => fruit.length);

console.log(lengths); 
// Output: [5, 6, 6]



