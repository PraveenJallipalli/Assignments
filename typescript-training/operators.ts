let a: number = 20;
let b: number = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


a+= 20;
console.log(a);

console.log("***************************************");
let x: number = 10;
let y: any = "10";
let z: number = 5;
console.log(x == y);
console.log(x === y);
console.log(x != z);
console.log(x !== y)
console.log(x > z);
console.log(x < z);
console.log(x >= z);
console.log(x <= z);

console.log("***************************************");

let d:number=10;
let e:number=20;
console.log(e>20 && (e-9)>20);

console.log(e>20 || (e-9)>20);

console.log(!(e>20 && (e-9)>20));

let result: string = (d > e) ? "i is greater than j" : "i is less than j";
console.log(result);