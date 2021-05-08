import React, { useState } from "react";
import temp from "../../../scss/images/temp.svg";
import layout from "../../../scss/images/layout.svg";
import user from "../../../scss/images/user.svg";
import color from "../../../scss/images/color.svg";
import font from "../../../scss/images/font.svg";
import content from "../../../scss/images/content.svg";
import Template from "./component/template"
import Background from "./component/background";
import Fonts from "./component/fonts";
import BasicInfo from "./component/basic_info";
import Layout from "./component/layout";

import { updateUserInfo } from "../../../actions/tool";
import { connect } from "react-redux";

function SideBar(props){
    const [type , setType] = useState('');
    const handleSideBarClick = (type) => {
        setType(type);
    }

    const basicInfoUpdate = (fieldObj) => {
        props.updateUserInfo(fieldObj)
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
                <div className="col-md-4 ">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="col-md-12 bg-white pt-3 pb-5 rounded" id="f1" role="tabpanel" aria-labelledby="pills-home-tab" style={{"overflow-y": "auto","height": "110vh","overflow-x": "hidden"}}>
                            <Template handleSidebar = { (value , key) => {props.handleSidebar(value , key); setType(null)}} />
                        </div>   
                    </div>

                </div>
                }

            {type == 'background' && 
                <div className="col-md-4">
                    <div className="tab-content  pt-3" id="pills-tabContent">

                        <div className="col-md-12 bg-white pb-5 rounded" id="f1" role="tabpanel" aria-labelledby="pills-home-tab" style={{"overflow-y": "auto","height": "160vh"}}>
                            <Background handleSidebar = { (value , key) => {props.handleSidebar(value , key);}} />
                        </div>   
                    </div>    
                </div>
                }

            {type == 'font' && 
                <div className="col-md-4">
                    <div className="tab-content  pt-3" id="pills-tabContent">

                        <div className="col-md-12 bg-white pb-5 rounded" id="f1" role="tabpanel" aria-labelledby="pills-home-tab" style={{"overflow-y": "auto","height": "160vh"}}>
                            <Fonts handleSidebar = { (value , key) => {props.handleSidebar(value , key);}} />
                        </div>   
                    </div>       
                </div>
            }
            {type == 'info' && 
                <div className="col-md-4">
                    <div className="tab-content  pt-3" id="pills-tabContent">

                        <div className="col-md-12 bg-white pb-5 rounded" id="f1" role="tabpanel" aria-labelledby="pills-home-tab" style={{"overflow-y": "auto","height": "160vh"}}>
                            <BasicInfo basicInfoUpdate={basicInfoUpdate} handleSidebar = { (value , key) => {props.handleSidebar(value , key)}} basic_info = {props.basic_info} />
                        </div>   
                    </div>                    
                </div>
            }
            {type == 'layout' && 
                <div className="col-md-4">
                    <div className="tab-content  pt-3" id="pills-tabContent">

                        <div className="col-md-12 bg-white pb-5 rounded" id="f1" role="tabpanel" aria-labelledby="pills-home-tab" style={{"overflow-y": "auto","height": "160vh"}}>
                            <Layout sample_map={props.resume_detail ? props.resume_detail.sample_map : {}} handleSidebar = { (value , key) => {props.handleSidebar(value , key)}} />
                        </div>   
                    </div>                    
                </div>
            }
        </>
    )
};

const mapStateToProps = ( state ) => ( {
});

const mapDispatchToProps = {
    updateUserInfo
};

export default connect( mapStateToProps, mapDispatchToProps )( SideBar );
   