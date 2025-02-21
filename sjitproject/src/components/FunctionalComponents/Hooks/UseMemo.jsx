import { useState } from "react"
function slowFunction(num){
    for(var i=0;i<100;i++){}
    return num*2;
}
const UseMemo=()=>{
    var[number,setNumber]=useState(0);
    var[theme,setTheme]=useState(false);
    var styling={
        backgroundColor:theme?"palevioletred":"white",
        color:theme?"white":"palevioletred",
    };
   /* var styling=useMemo(()=>{
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black",
    })
   var doublingUpANumber=useMemo(()=>{
    return number*2
   },[number])*/
    return(
        <div style={styling}>
            <h1>This is UseMemo example</h1><br />
            Number Box:{" "} <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/><br /><br />
            <h2>The number is {number}</h2><br />
            <h2>The number is {slowFunction(number)}</h2><br />
            <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        </div>
    )
}
export default UseMemo;