/*
function promiseEg(value)
{
    return new Promise((resolve,reject)=>{
        let value=false
        setTimeout(()=>{
            if(value)
            resolve("The promise is resolved");
        else reject("This promise is rejected");
        },2000);
    })
}
promiseEg().then((res)=>{
    console.log(res);
})
console.log(promiseEg())
*/

// Location finder
// 1.Promise(LocFound,LocNotFound)