//1. variables - refer declarations
//2. arrow function

function testFunction()
{
    console.log("This is a test function");
}
testFunction()
ArrowFunction=()=>
{
    console.log("Arrow Function");
}
ArrowFunction()
//3. Scoping

var a=10
console.log(a);  // 10
{
     let a =20;   // Local scope
    console.log(a);  // 20
    let b =30;
    console.log(b);  // 30
    var c =40;
    console.log(c);  // 40
    const e =60;
    console.log(e);  // 60
    a =50;
    console.log(a);  // 50
    f=35;
}
console.log(a);  // 10
console.log(c);  // 40
console.log(f);  // 35
a=10
console.log((a%2)?"Odd":"Even");  // 1:0