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
            
            <div className="row">

                <div className="col-md-12 mt-4 mb-4 font-info">
                    <i class="far fa-font"></i>
                    <h5>Fonts</h5>
                </div>
                {fonts.map((itm) => (
                    <div className="col-md-3">
                        <div className="custom-control custom-radio mb-3">
                            <input type="radio" className="custom-control-input" name="font" id={`customRadio${itm}`} value={itm} onChange={(e) => props.handleSidebar(itm , 'font') }/> 
                            <label className="custom-control-label" for={`customRadio${itm}`}>{itm}</label>
                        </div>
                    </div>
                ))}
                    
                <div className="col-md-12 mt-4 mb-4 font-info">
                    <i class="far fa-text-height"></i>
                    <h5>Font Weight</h5>
                </div>
                {fontPairing.map((itm) => (
                    
                    <div className="col-md-3">
                        <div className="custom-control custom-radio mb-3">
                            <input type="radio" name="fontWeight" className="custom-control-input"  id={`customRadio11${itm}`} value={itm} onChange={() => props.handleSidebar(itm , 'fontPairing')}  />
                            <label className="custom-control-label" for={`customRadio11${itm}`}>{itm}</label>
                        </div>
                    </div>
                ))}

                <div className="col-md-12 mt-4 mb-4 font-info">
                    <i class="far fa-text-size"></i>
                    <h5>Font Size</h5>
                </div>
                {fontSize.map((itm) => (
                        
                    <div className="col-md-3">
                        <div className="custom-control custom-radio mb-3">
                            <input type="radio" name="fontSize" key={itm.text} className="custom-control-input" id={`customRadio12${itm.text}`} value={itm.text} onChange={() => props.handleSidebar(itm.value , 'fontSize')}  />
                            <label className="custom-control-label" style= {{fontSize: itm.value}} for={`customRadio12${itm.text}`}>{itm.text}</label>
                        </div>
                    </div>
                ))}

                {/* <div className="col-md-12 mt-4">
                    <h6 className="p-2" style={{fontWeight: 700}}>Style</h6><br></br>

                </div> */}
                {/* <div className="col-md-12">
                    <span className="mdi mdi-format-bold f-20 d-inline-block mr-4" onClick={bold}></span>
                    <span className="mdi mdi-format-italic f-20 d-inline-block mr-4" onClick={italic}></span>
                    <span className="mdi mdi-format-underline  f-20 d-inline-block mr-4" onClick={underline}></span>
                </div> */}
                {/* <div className="col-md-12">
                    <div className="custom-control custom-switch mt-4 mb-4">
                        <input type="checkbox" className="custom-control-input" id="switch1" />
                        <label className="custom-control-label" for="switch1">Sample Text</label>
                    </div>
                </div> */}


                {/* <div className="col-md-12 mt-4">
                    <h6 className="p-2" style={{fontWeight: 700}}>Icons</h6><br></br>
                </div>

                {iconList.map((itm , i) => (
                    <div className="col-md-6">
                        <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" name="fontSize" className="custom-control-input" id={`customRadio18${itm.text}`} onChange={(e) => handleCheckBox(e , i)} checked={itm.status} />
                            <label className="custom-control-label" for={`customRadio18${itm.text}`}>{itm.text}</label>
                        </div>
                    </div>
            
                ))} */}
            
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
   