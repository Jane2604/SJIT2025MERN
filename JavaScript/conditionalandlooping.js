//Conditional Statement
/*
1.Normal if
2.if...else...
3.nested if...
4.else if ladder
5.switch
*/
if(5<10)
{
    console.log(true);
}
else
{
    console.log(false);
}
//Looping Statement
/*
1.while
2.do...while
3.for(;;)
4.forin
5.forof
6.forEach
*/
array=[10,20,30,"abc",true,"hello",[10,20,30]]
for(var value in array)
{
    console.log(value);
}
object1={
    "firstname":"St.Joseph's",
    "lastname":"Institute of technology",
    "departments":["CSE","IT","ADS","ECE"],
    "training":"MERN"
}
Object.entries(object1).forEach((key,element)=>{
    console.log(key,element);
})
let a=10
while(a<12)
{
    console.log(a);
    a++;
}
console.log(a);