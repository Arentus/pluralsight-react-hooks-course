import React, { useState } from "react"

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    const [historyList,setHistoryList] = useState([]);
    console.log(historyList)
    return <div>
            <input 
            onChange={(e) => { 
                setInputText(e.target.value); 
                setHistoryList([...historyList,e.target.value]);
            }}
            value={inputText}
            placeholder="Enter Some Text" /><br/>
            {inputText}
            <hr/><br/>
            <ul>
                {
                    historyList.map((rec)=>{
                        return <li>{rec}</li>
                    })
                }
            </ul>
        </div>
}

export default InputElement;