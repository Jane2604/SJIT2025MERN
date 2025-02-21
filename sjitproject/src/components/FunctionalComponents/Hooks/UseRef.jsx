import { useState, useRef, useEffect } from "react";

const UseRef = () => {
    const [text, setText] = useState(""); 
    const previousRender = useRef(""); 

    useEffect(() => {
        previousRender.current = text;
        console.log(previousRender.current);
    }, [text]);

    return (
        <div>
            <h1>This is useRef example.</h1><br />
            Type your text:{" "}
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            /><br /><br />
            <h2>The text typed is: {text}</h2><br />
            <h3>The previous render text was: {previousRender.current}</h3>
        </div>
    );
};

export default UseRef;