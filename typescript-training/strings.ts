let name:string= "Praveen is a software engineer";
console.log(name.length);
console.log(name.charAt(2));


let emptyName="";
for(let i=name.length;i>=0;i--)
{

   emptyName+= name.charAt(i);


}

console.log(emptyName);

let fruits:string= "Apple,Orange,Apple,Banana";
console.log(fruits.replace(/Apple/,"orange"));
console.log(fruits);
console.log(fruits.replace(/[a-zA-Z]/g, ""));


let newString:string="Praveen Jallipalli";
console.log(newString.padStart(15,","));
console.log(newString.padEnd(15,","));
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());
console.log(newString.substring(1,3));
let splittedString:string[]=newString.split(" ");
console.log(splittedString[0]);
console.log(splittedString[1]);


let name1:string="Praveen";
let name2:string="praveen";
let name3:string="prav"
console.log(name1.toLowerCase()===name2.toLowerCase());
console.log(name2.includes(name3));


console.log("*************************************************");
let name5:string= "Hello 123 World";
console.log(name5.startsWith("Hello"));
console.log(name5.endsWith("World"));

console.log(name5.match(/o/g));
console.log(name5.match(/\d/g));

