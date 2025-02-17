function SJITCollege(message,abc)
{
    console.log(message);
    abc()
}
function callbackSJIT()
{
    console.log("Welcome back to SJIT");
}
SJITCollege("Welcome to SJIT",callbackSJIT)
function formsubmission(message,cbFun)
{
    if(cbFun())
    {
        console.log(message);
    }
    else
    {
        console.log("Form submission unsuccessful");
    }
}
function formvalidation()
{
    console.log("Form validation successful");
    return true
}
formsubmission("Form submission successful",formvalidation)