import React from 'react';
import {background_color , text_color , theme} from "../../../../configs"
const Background = (props) => {
    return(
        <div>
            <h2>Background color</h2>
                <div>
                    {background_color.map(item => (
                        <li key={item} onClick={() => props.handleSidebar(item , 'background')}>{item}</li>
                    ))}
                </div>
            <h2>Theme</h2>
                <div>
                    {theme.map(item => (
                        <li key={item} onClick={() => props.handleSidebar(item , 'theme')}>{item}</li>
                    ))}
                </div>
            <h2>Text Color</h2>
                <div>
                    {text_color.map(item => (
                        <li key={item} onClick={() => props.handleSidebar(item , 'text_color')}>{item}</li>
                    ))}
                </div> 
        </div>
    )
}

export default Background;