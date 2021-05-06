import React from 'react';
import {background_color , text_color , theme} from "../../../../configs"
const Background = (props) => {
    return(
        <div>
            <h6>Background</h6>
                <ul class="color">
                    {background_color.map(item => (
                        <li key={item} onClick={() => props.handleSidebar(item , 'background')}  style={{"background-color":item}}  ><span></span></li>

                        ))}
                </ul>
                {/* <h6>New Colour</h6>
                <div class="all"></div> */}
                <h6 class="mt-2">Theme</h6>
                <div class="row">
                    {theme.map(item => (
                    <div class="col-md-6" onClick={() => props.handleSidebar(item , 'theme')}>
                        <img src={item} /> 
                    </div>

                    ))}                
                </div>
                <h6 className="pt-3">Text Color</h6>
                <ul class="color">
                    {text_color.map(item => (
                        <li key={item} onClick={() => props.handleSidebar(item , 'text_color')}  style={{"background-color":item}}  ><span></span></li>

                        ))}
                </ul>
                {/* <h6>New Colour</h6>
                <div class="all"></div> */}
            {/* <h2>Background color</h2>
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
                </div>  */}
        </div>
    )
}

export default Background;