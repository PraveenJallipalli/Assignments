
let empDetails =new Map();
empDetails.set("Name", "Praveen");
empDetails.set("Job", "software");
empDetails.set("EmpId", 12345);
empDetails.set("havingVisa is not true", false);



//To access the specific key
console.log(empDetails.get("havingVisa"));

//To delete specific key and value pair
empDetails.delete("Job");

console.log(empDetails);
