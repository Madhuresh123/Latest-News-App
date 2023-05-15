import React, { useState } from 'react'

function AppBody() {

    const [text, setText] = useState('Prodemic this is article on prodemic');
    const [mode, setMode] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClickLower = () => {
        setText(text.toLowerCase());

        if( text !== text.toLowerCase()){
        setTimeout(() => {

            const LowerAlert = document.querySelector(".alert")
            if(LowerAlert){
                LowerAlert.style.backgroundColor = "leaf-green"
            }
        }, 500) 
    }
    }

    const handleClickUpper = () => {
        setText(text.toUpperCase());
        if( text !== text.toUpperCase() ){
        setTimeout(() => {

            const upperAlert = document.querySelector(".alert")
            if(upperAlert){
                upperAlert.style.display = "flex"
            }

        }, 500) 
       }

    }

    const handleClickMode = () => {
        if(mode === false){
        setMode(true)
        document.body.style.backgroundColor = "#343a40"
        const headings = document.querySelectorAll("h1, h2, p")
        headings.forEach((element) => {
            element.style.color = "white"
        })

        const WritingArea = document.querySelector("textarea")
        if(WritingArea){
        WritingArea.style.backgroundColor = "rgb(145 174 216)"
        WritingArea.style.border = "solid 2px rgb(145 174 216)"
        }

        const stylebutton = document.querySelectorAll("button")
        if(stylebutton){
            stylebutton.forEach((element)=>(element.style.backgroundColor = "rgb(145 174 216)" ))
        }


        const headerColor = document.querySelector(".header")
        if(headerColor){
            headerColor.style.backgroundColor = "gray"
            headerColor.style.color = "white"

        }        

        }
        else{
        setMode(false)
        document.body.style.backgroundColor = "white"
        const headings = document.querySelectorAll("h1 , h2, p")
        headings.forEach((element) => {
            element.style.color = "black"
        })
        const WritingArea = document.querySelector("textarea")
        WritingArea.style.backgroundColor = "white"

        const headerColor = document.querySelector(".header")
        if(headerColor){
            headerColor.style.backgroundColor = "yellow"
            headerColor.style.color = "black"

        }      
        
        const stylebutton = document.querySelectorAll("button")
        if(stylebutton){
            stylebutton.forEach((element)=>(element.style.backgroundColor = "#dee1e5" ))
        }
    }
    }

    const handleClickClear = () => {
        setText("")
    }

    const handleClickCopy = () => {
        navigator.clipboard.writeText(text)
    }

    const handleClickSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <div className='appBody'>
        
            <h1>Word Counter</h1>
            <textarea value={text} onChange={handleChange}></textarea>
            <div className="buttons">
                <button type='button' onClick={handleClickUpper}>To upper case</button>
                <button type='button' onClick={handleClickLower}>To Lower case</button>
                <button type='button' onClick={handleClickMode}>Dark mode</button>
                <button type='button' onClick={handleClickClear}>Clear</button>
                <button type='button' onClick={handleClickCopy}>Copy</button>
                <button type='button' onClick={handleClickSpace}>Space</button>

            </div>
            <div className='result'>
                <p>No.of words = {text.split(/\s+/).filter((element) => (element.length !== 0)).length}</p>
                <p>No.of character = {text.replace(/\s+/g, '').length}</p>
            </div>
            <div>
                <h2> Preview </h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default AppBody
