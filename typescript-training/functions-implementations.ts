
// function helloWorld():void{
// console.log("Printing Hello world")
// }

// helloWorld();


// function sayHello(name:string):string{

//     return name+ " is my name"
// }

// console.log(sayHello("Praveen"));



// //Function with Optional parameters

// function nameAndAge(name:string,age?:number):string
// {

// if(age!==undefined){

 
//     return "No age"
// }
// else{

//     return name+age;

// }

// }

// nameAndAge("Praveen");

// function printUser(name: string, age?: number): string {
// if (age !== undefined) {
// return name + " is " + age + " years old";
// }
// return name + "'s age is not provided";
// }
// printUser("Bharath");
// printUser("Bharath", 30);

//Rest parameters
function addSum(...nums:number[]){

let sum:number=0;
for(let i of nums){

sum=sum+i;

}
return sum;

}

let v=addSum(1,2,3,4);
console.log(v);
