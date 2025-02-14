//Primitive primary datatypes
var a=10
let b="abc"
const c=true
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
a="abc"
b=26.01
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
//c=false
//Secondary Datatypes
array=[1,6,"abc",true]
console.log(array);
//ojects
//1st type of object declaration
console.log("1st type of object declaration");
object1={
    "firstname":"St.Joseph's",
    "lastname":"Institute of technology",
    "departments":["CSE","IT","ADS","ECE"],
    "training":"MERN"
}
console.log(object1);
console.log(object1.departments);
console.log(object1["training"]);
//2nd type of object declaration
console.log("2nd type of object declaration");
object2={}
object2["firstname"]="Hello"
object2["lastname"]="SJIT"
object2["training"]=["Git","HTML","CSS","MongoDB","Express","React","Node","Hosting"]
console.log(object2);
//3rd type of object declaration
object3=new Object()
console.log(object3)
object3.training="MERN"
object3.departments=["CSE","IT","ADS","ECE"]
console.log(object3)
console.log(object3.departments)
set=new Set("Hello")
console.log(set);
set.add("Hi")
console.log(set);
console.log(typeof(set))