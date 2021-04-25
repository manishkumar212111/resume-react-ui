import React from "react";
import temp from "../../../scss/images/temp.svg";
import layout from "../../../scss/images/layout.svg";
import user from "../../../scss/images/user.svg";
import color from "../../../scss/images/color.svg";
import font from "../../../scss/images/font.svg";
import content from "../../../scss/images/content.svg";


function SideBar(props){
    return(
        <div className="col-md-2">
            <ul className="nav nav-pills mb-3 " id="pills-tab1" role="tablist">
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation">
                    <div className="nav-link  bg-white text-center p-4" id="pills-home-tab" data-toggle="pill" href="#f1" role="tab" aria-controls="pills-home" aria-selected="false">
                        <img className="d-block w-50" src={temp} alt="work-img" /> Change Template</div>
                </li>
                <li className="nav-item col-md-12 mt-3  p-0" role="presentation">
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-profile-tab " data-toggle="pill" href="#f2" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <img className="d-block w-50" src={layout} alt="work-img" />Layout</div>
                </li>
                <li className="nav-item col-md-12 mt-3  p-0" role="presentation">
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab" data-toggle="pill" href="#f3" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={user} alt="work-img" />Account info
                        & Social account</div>
                </li>
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation">
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab" data-toggle="pill" href="#f4" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={color} alt="work-img" />Background
                        & colors                               </div>

                </li>
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation">
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab " data-toggle="pill" href="#f5" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={font} alt="work-img" />Fonts</div>
                </li>
                <li className="nav-item col-md-12 mt-3 p-0" role="presentation">
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab " data-toggle="pill" href="#f6" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={content} alt="work-img" /> Content
                        Management</div>
                </li>

            </ul>

        </div>
        
    )
};

export default SideBar;