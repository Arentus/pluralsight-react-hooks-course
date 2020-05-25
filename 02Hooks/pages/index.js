import React, { useState } from "react"

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    return <input 
        onChange={(e) => {}}
        placeholder="Enter Some Text" />;
}

export default InputElement;