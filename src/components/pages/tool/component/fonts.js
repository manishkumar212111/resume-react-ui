import React, { useState } from 'react';
import { fonts , fontPairing , fontSize , icons } from "../../../../configs"
import {connect} from "react-redux";
import {updateFontState} from "../../../../actions/tool";
const Fonts = (props) => {
    const [ iconList , setIconList] = useState(icons);

    const handleCheckBox = (e , i) => {

        iconList[i].status = e.target.checked;
        console.log(iconList , "vdfvjdf", e.target)
        setIconList(iconList);
        props.handleSidebar(iconList , 'icons');
    }

    const bold = (e) => {
        props.updateFontState({bold : !props.font_detail.bold});    
    }
      
    const italic = (e) => {
        props.updateFontState({italic : !props.font_detail.italic});    

    }
      
    const underline= (e) =>{
        props.updateFontState({underline : !props.font_detail.underline});    
    }
    
    console.log(props.font_detail)
    return (
        <>
        <h6>Fonts</h6>
            <div className="row">
            {fonts.map((itm) => (
                <div className="col-md-6">
                    <div className="custom-control custom-radio mb-3">
                        <input type="radio" className="custom-control-input" name="font" id={`customRadio${itm}`} value={itm} onChange={(e) => props.handleSidebar(itm , 'font') }/> 
                        <label className="custom-control-label" for={`customRadio${itm}`}>{itm}</label>
                    </div>
                </div>
            ))}
                
            <div className="col-md-12 mt-4">
                <h6>Font Weight</h6>

            </div>
            {fontPairing.map((itm) => (
                
                <div className="col-md-6">
                    <div className="custom-control custom-radio mb-3">
                        <input type="radio" className="custom-control-input"  id={`customRadio11${itm}`} value={itm} onChange={() => props.handleSidebar(itm , 'fontPairing')}  />
                        <label className="custom-control-label" for={`customRadio11${itm}`}>{itm}</label>
                    </div>
                </div>
            ))}

            <div className="col-md-12 mt-4">
                <h6>Font Size</h6>

            </div>
            {fontSize.map((itm) => (
                    
                <div className="col-md-6">
                    <div className="custom-control custom-radio mb-3">
                        <input type="radio" key={itm.text} className="custom-control-input" id={`customRadio12${itm.text}`} value={itm.text} onChange={() => props.handleSidebar(itm.value , 'fontSize')}  />
                        <label className="custom-control-label" for={`customRadio12${itm.text}`}>{itm.text}</label>
                    </div>
                </div>
            ))}

                <div className="col-md-12 mt-4">
                    <h6>Style</h6>

                </div>
                <div className="col-md-12">
                    <span className="mdi mdi-format-bold f-20 d-inline-block mr-4" onClick={bold}></span>
                    <span className="mdi mdi-format-italic f-20 d-inline-block mr-4" onClick={italic}></span>
                    <span className="mdi mdi-format-underline  f-20 d-inline-block mr-4" onClick={underline}></span>
                    {/* <span className="mdi mdi-format-size f-20 d-inline-block mr-4"></span>
                    <span className="mdi mdi-format-align-center f-20 d-inline-block"></span> */}
                </div>
                {/* <div className="col-md-12">
                    <div className="custom-control custom-switch mt-4 mb-4">
                        <input type="checkbox" className="custom-control-input" id="switch1" />
                        <label className="custom-control-label" for="switch1">Sample Text</label>
                    </div>
                </div> */}


                <div className="col-md-12 mt-4">
                    <h6>Icons</h6>
                </div>

                {iconList.map((itm , i) => (
                    <div className="col-md-6">
                        <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" name="fontSize" className="custom-control-input" id={`customRadio18${itm.text}`} onChange={(e) => handleCheckBox(e , i)} checked={itm.status} />
                            <label className="custom-control-label" for={`customRadio18${itm.text}`}>{itm.text}</label>
                        </div>
                    </div>
            
                ))}
            
        </div>

        </>
    )
}


const mapStateToProps = ( state ) => ( {
    font_detail: state.tool.font_detail
} );

const mapDispatchToProps = {
    updateFontState
};

export default connect( mapStateToProps, mapDispatchToProps )( Fonts );
   