import React, { useState } from 'react';
import { fonts , fontPairing , fontSize , icons } from "../../../../configs"

const Fonts = (props) => {
    const [ iconList , setIconList] = useState(icons);

    const handleCheckBox = (e , i) => {

        iconList[i].status = e.target.checked;
        console.log(iconList , "vdfvjdf", e.target)
        setIconList(iconList);
        props.handleSidebar(iconList , 'icons');
    }

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
    
    return (
        <div>
            <h2>Fonts</h2>
            {fonts.map((itm) => (
                <><input type="radio" name="font" value={itm} onChange={() => props.handleSidebar(itm , 'font')} /> {itm}</>
            ))}
            <h2>Fonts Pairing</h2>
            
            {fontPairing.map((itm) => (
                <><input type="radio" name="fontPairing" value={itm} onChange={() => props.handleSidebar(itm , 'fontPairing')} />{itm}</>
            ))}

            <h2>Font Size</h2>
            
            {fontSize.map((itm) => (
                <><input type="radio" value={itm.text} name="fontSize" onChange={() => props.handleSidebar(itm.value , 'fontSize')} />{itm.text}</>
            ))}
            <h2>
                Style
            </h2>
            <button onClick={bold}>Bold</button>
            <button onClick={italic}>Italic</button>
            <button onClick={underline}>Underline</button>
            
            <h2>Icon</h2>
            {iconList.map((itm , i) => (
                <><input type="checkbox" name="fontSize" onChange={(e) => handleCheckBox(e , i)} checked={itm.status} />{itm.text}</>
            ))}
                

        </div>
    )
}

export default Fonts;