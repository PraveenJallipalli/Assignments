/*
function fullName(name:string){

    return "May name :" +name;

}


console.log(fullName("Praveen"));

(name:string)=>"May name :" +name;

*/

function add(a:number,b:number):number
{
    let c:number=a+b;
    return c;
}

let d = (a:number,b:number):number=>(a=b);

console.log(d(4,5));

