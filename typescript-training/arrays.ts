

let values:number[]= [1,2,3,4,5,6,7,8,9];
let names:string[]=["apple", "banana","orange"];

// values.push(10);
// console.log(values);

// values.pop();
// console.log(values);

// values.unshift(10);

// console.log(values);

// values.shift();
// console.log(values);

// values.indexOf(3);
// console.log(values.indexOf(3));
// values.splice(1,2);
// console.log(values);

// let numbers1= values.slice(1,3);

// console.log(numbers1);


for(let val of values){

    console.log(val);
}


console.log(values.sort((a,b)=> b-a));

//Reverse the values

console.log(names.reverse());


//map, filter and foreach methods in the array

let a:number[]=[100,500,300,150];

console.log(a.map(b=>b*b));

console.log(a.filter(x=> x%2==0));

