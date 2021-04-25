import React, { useState } from "react";

const TextEditor = (props) => {
    const [isContentEditable , setContentEditable] = useState(false) 
    const bold = (e) => {
        e.preventDefault();
        document.execCommand("bold");
      }
      
    const italic = (e) => {
        e.preventDefault();
        document.execCommand("italic");
      }
      
    const underline= (e) =>{
        e.preventDefault();
        document.execCommand("underline");
      }

    const handleChange = (e) => {
      window.temp=e.target.html;
      console.log(e.target , e.target.value);
    }  

    const onFocus = (e) => {
      setContentEditable(true)
      console.log(e)
    }

    const onBlur = (e) => {
      // setContentEditable(false);
      // console.log(e)
    }
    return (<div>
        <button onClick={bold}>Bold</button>
        <button onClick={italic}>Italic</button>
          <button onClick={underline}>Underline</button>
        <div className={isContentEditable ? "editable": ""} contentEditable={isContentEditable} onDoubleClick={(e) => onFocus(e)} onBlur={(e) => onBlur(e)} onFocus={(e) => onFocus(e)} onInput={(e) => handleChange(e)}>
          I am a rich text editor. You can also use CTRL-B, CTRL-I and CTRL-U to bold, italicize, and underline. If you look at my HTML you'll see HTML tags being added too :)
        </div>
        <div className={isContentEditable ? "editable": ""} contentEditable={isContentEditable} onDoubleClick={(e) => onFocus(e)} onBlur={(e) => onBlur(e)} onFocus={(e) => onFocus(e)} onInput={(e) => handleChange(e)}>
          , CTRL-I and CTRL-U to bold, italicize, and underline. If you look at my HTML you'll see HTML tags being added too :)
        </div>
        
      </div>);
}

export default TextEditor;