interface empDetails{

empId :number,
empName:string,
havingVisa: boolean,
empRole?:string,
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


// console.log(dummyObject.empId);
// console.log(dummyObject["empId"]);
// dummyObject.empRole="Software";
// console.log(dummyObject);

// delete dummyObject.empRole;

// console.log(dummyObject);

// console.log("empRole" in dummyObject);

// console.log(Object.keys(dummyObject));
// console.log(Object.values(dummyObject));
 //console.log(Object.entries(dummyObject));

//  for(let key in dummyObject){

//     console.log(key+ " : " +dummyObject[key as keyof empDetails]);

//  }


 interface project{

    projectId:number,
    projectName:string,
 }

 let WFproject:project={
 projectId:10001,
    projectName:"ECC",

 }

 for(let key in WFproject){

   // console.log(`${key}  ${WFproject[key]}`);
 }

//  let mergedObj= {...WFproject,...dummyObject};
//  console.log(mergedObj);