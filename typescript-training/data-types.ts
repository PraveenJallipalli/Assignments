

// let num:number=1000;
// let name:string=`praveen`;
// let result: boolean =false;

// console.log("printing number :" +num);
// console.log("printing name :" +name);
// console.log("printing result :" +result);


// console.log("*********************************");

// let anyDataType:number|string|boolean =true;
// anyDataType='praveen'

// console.log("printing name :" +anyDataType);


// let anyVaraiable:undefined;
// console.log("printing :" +anyVaraiable);

// console.log("*********************************");

// let fruits:string[]= ["apple","banana","watermelon"];
// let prices:number[]=[100,200,300,400,500];
// let fruitAndPrices: (string|number)[]=     ["apple",100,"banana",200,"watermelon"];                                                
// console.log(fruits[2]);
// console.log(prices[2]);
// console.log(fruitAndPrices[2]);

// console.log("*********************************");

interface empDetails{

empId :number,
empName:string,
havingVisa: boolean,
address: {
city: string,
state: string,
zipCode:number
}
}


let dummyObject:empDetails={
empId :1000,
empName:'praveen',
havingVisa: true,
address: {
city: "Hyderabad",
state: "Telanagan",
zipCode:500085
}
}

for(let key in dummyObject)
{

    let typedKey= key as keyof empDetails;
    
  console.log(key,dummyObject[typedKey]);
  console.log("****************");
}

//  let valueofKey= key as keyof empDetails;
//  console.log(valueofKey);







// }

// console.log(dummyObject.empId);
// console.log(dummyObject.empName);
// console.log(dummyObject.havingVisa);
// console.log(dummyObject.address.state);



// function launchApplication(browser:string, url:string):void
// {

// console.log("Launch the application using browser " +browser);
// console.log("Launch the application using url " +url);

// }

// launchApplication("Chrome","www.google.com");

// function sumOfNumbers(num1:number,num2:number):Number{
// let num3=num1+num2;
// return num3;
// }

// console.log(sumOfNumbers(10,20));

// function joinTwoString(firstName:string,lastName:string):string{

// let fullName=firstName+" "+lastName;
// return fullName;

// }

// console.log(joinTwoString("Jallipalli","Praveen"));


// let empMap:Map<string,string>=new Map();
// empMap.set("name","praveen");
// empMap.set("city","Hyderabad");
// empMap.set("state","Telanagan");

// console.log("printing the Map :", empMap);



// let empSet:Set<number>=new Set();
// empSet.add(10);
// empSet.add(20);
// empSet.add(30);
// empSet.add(40);


// console.log(empSet);
