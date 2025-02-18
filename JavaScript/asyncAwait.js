 /*
 async function asAw()
{
    var a=15
    setTimeout(function()
    {
        console.log("Hello");
    },3000)
    console.log( await a);
}
console.log(asAw().then((res)=>console.log(res)));
console(await asAw())
console.log(asAw())
asAw().then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log("res");
})
*/

// Instagram console demo for post,like,comment,share
likeCode=async()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost("Liked the created post successfully!")
        },2000);
    })
}
commentCode=async()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("Commented on the created post successfully!")
        },2000);
    })
}
shareCode=async()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>
        {
            sharePost("Shared the created post successfully!")
        },2000);
    })
}
async function postCode()
{
    var post=new Promise(createPost=>{
        setTimeout(()=>{
            createPost("Post created successfully!")
        },2000);
    })
    console.log(await post)
    console.log(await likeCode());
    console.log(await commentCode());
    console.log(await shareCode());
}
postCode()