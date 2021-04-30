import React, { useState } from "react";
import temp from "../../../scss/images/temp.svg";
import layout from "../../../scss/images/layout.svg";
import user from "../../../scss/images/user.svg";
import color from "../../../scss/images/color.svg";
import font from "../../../scss/images/font.svg";
import content from "../../../scss/images/content.svg";
import Template from "./component/template"
import Background from "./component/background";

function SideBar(props){
    const [type , setType] = useState('');
    const handleSideBarClick = (type) => {
        setType(type);
    }

    return(
        <>
        <div className="col-md-2">
            <ul className="nav nav-pills mb-3 " id="pills-tab1" role="tablist">
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation" onClick={() => handleSideBarClick('template')}>
                    <div className="nav-link  bg-white text-center p-4" id="pills-home-tab" data-toggle="pill" href="#f1" role="tab" aria-controls="pills-home" aria-selected="false">
                        <img className="d-block w-50" src={temp} alt="work-img" /> Change Template</div>
                </li>
                <li className="nav-item col-md-12 mt-3  p-0" role="presentation" onClick={() => handleSideBarClick('layout')}>
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-profile-tab " data-toggle="pill" href="#f2" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <img className="d-block w-50" src={layout} alt="work-img" />Layout</div>
                </li>
                <li className="nav-item col-md-12 mt-3  p-0" role="presentation" onClick={() => handleSideBarClick('info')}>
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab" data-toggle="pill" href="#f3" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={user} alt="work-img" />Account info
                        & Social account</div>
                </li>
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation" onClick={() => handleSideBarClick('background')}>
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab" data-toggle="pill" href="#f4" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={color} alt="work-img" />Background
                        & colors                               </div>

                </li>
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation" onClick={() => handleSideBarClick('font')}>
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab " data-toggle="pill" href="#f5" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={font} alt="work-img" />Fonts</div>
                </li>
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation" onClick={() => handleSideBarClick('content')}>
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab " data-toggle="pill" href="#f6" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={content} alt="work-img" /> Content
                        Management</div>
                </li>

            </ul>

        </div>
        
            {type == 'template' && 
                <div class="col-md-4 ">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="pt-5" id="f1" role="tabpanel" aria-labelledby="pills-home-tab" style={{"overflow-y": "auto","height": "110vh","overflow-x": "hidden"}}>
                            <Template handleSidebar = { (value , key) => {props.handleSidebar(value , key); setType(null)}} />
                        </div>   
                    </div>

                </div>
                }

            {type == 'background' && 
                <div class="col-md-4 ">
                        <div class="pt-5" id="f1" role="tabpanel" aria-labelledby="pills-home-tab" style={{"overflow-y": "auto","height": "110vh","overflow-x": "hidden"}}>
                            <Background handleSidebar = { (value , key) => {props.handleSidebar(value , key);}} />
                        </div>   
                    
                </div>
                }
        </>
    )
};

export default SideBar;