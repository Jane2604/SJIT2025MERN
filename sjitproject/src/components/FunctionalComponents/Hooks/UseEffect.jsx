import { useEffect,useState } from "react";
    
const UseEffect=()=>{
    var [text,setText]=useState("");
    var [text1,setText1]=useState("");
    useEffect(()=>{
        console.log(text);
        console.log(text1);
    },[])
       return (
        <section>
            <h1>This is useEffect Example</h1><br />
            Type your text:{" "} 
            <input 
            type="text"
            value={text} 
            onChange={(event)=>setText(event.target.value)}/><br />
            <h2>The text type is {text}</h2>
            Type your text:{" "} 
            <input 
            type="text"
            value={text1} 
            onChange={(event)=>setText1(event.target.value)}/><br />
            <h2>The text type is {text1}</h2><br />
        </section>
        
       )
}
export default UseEffect;