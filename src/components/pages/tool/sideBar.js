import React, { useEffect, useState } from "react";
import temp from "../../../scss/images/temp.svg";
import layout from "../../../scss/images/layout.svg";
import user from "../../../scss/images/user.svg";
import color from "../../../scss/images/color.svg";
import close from "../../../scss/images/close.png";
import font from "../../../scss/images/font.svg";
import content from "../../../scss/images/content.svg";
import Template from "./component/template";
import Background from "./component/background";
import Fonts from "./component/fonts";
import BasicInfo from "./component/basic_info";
import Layout from "./component/layout/index";

import { updateUserInfo } from "../../../actions/tool";
import { connect } from "react-redux";

function SideBar(props) {
  const [type, setType] = useState("content");
  const handleSideBarClick = (type) => {
    type == "" && props.setType("");
    setType(type);
    props.setSideBarOpen(type);
  };

  useEffect(() => {
    setType(props.type);
  }, [props.type]);

  const basicInfoUpdate = (fieldObj) => {
    props.updateUserInfo(fieldObj);
  };

  console.log(type);
  return (
    <>
      <div className="col-md-1">
        <ul className="nav nav-pills mb-3 " id="pills-tab1" role="tablist" style={{position:"fixed" , width: "6%", minWidth: "112px", fontSize: 11, cursor: "pointer", lineHeight: "1.4"}}>
          <li
            className="nav-item col-md-12 mt-3 "
            role="presentation"
            onClick={() =>
              handleSideBarClick(type == "template" ? "" : "template")
            }
          >
            <div
              className="nav-link bg-white text-center p-2"
              id="pills-home-tab"
              data-toggle="pill"
              href="#f1"
              role="tab"
              aria-controls="pills-home"
              aria-selected="false"
            >
              <img className="d-block w-50" src={temp} alt="work-img" /> Change
              Template
            </div>
          </li>
          <li
            className="nav-item col-md-12 mt-3  "
            role="presentation"
            onClick={() => handleSideBarClick(type == "layout" ? "" : "layout")}
          >
            <div
              className="nav-link  p-2 bg-white  text-center"
              id="pills-profile-tab "
              data-toggle="pill"
              href="#f2"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <img className="d-block w-50" src={layout} alt="work-img" />
              Layout
            </div>
          </li>
          {/* <li className="nav-item col-md-12 mt-3  p-0" role="presentation" onClick={() => handleSideBarClick(type =='info' ? "" : "info")}>
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab" data-toggle="pill" href="#f3" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={user} alt="work-img" />Account info
                        & Social account</div>
                </li> */}
          <li
            className="nav-item col-md-12 mt-3"
            role="presentation"
            onClick={() =>
              handleSideBarClick(type == "background" ? "" : "background")
            }
          >
            <div
              className="nav-link  p-2 bg-white  text-center"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#f4"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <img className="d-block w-50" src={color} alt="work-img" />
              Background & colors{" "}
            </div>
          </li>
          <li
            className="nav-item col-md-12 mt-3 "
            role="presentation"
            onClick={() => handleSideBarClick(type == "font" ? "" : "font")}
          >
            <div
              className="nav-link  p-2 bg-white  text-center"
              id="pills-contact-tab "
              data-toggle="pill"
              href="#f5"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <img className="d-block w-50" src={font} alt="work-img" />
              Fonts
            </div>
          </li>
          <li
            className="nav-item col-md-12 mt-3 "
            role="presentation"
            onClick={() => handleSideBarClick(type == "content" ? "" : "content")}
          >
            <div
              className="nav-link  p-2 bg-white  text-center"
              id="pills-contact-tab "
              data-toggle="pill"
              href="#f5"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <img className="d-block w-50" src={content} alt="work-img" />
              Content
            </div>
          </li>
          {/* <li className="nav-item col-md-12 mt-3 p-0" role="presentation" onClick={() => handleSideBarClick(type == 'content' ? "" : "content")}>
                    <div className="nav-link  p-4 bg-white  text-center" id="pills-contact-tab " data-toggle="pill" href="#f6" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-block w-50" src={content} alt="work-img" /> Content
                        Management</div>
                </li> */}
        </ul>
      </div>
      {type && type !== "content" && <div className="sideBarContent rmf_thin_scroll_t">   
      <img className="sidebarClose" onClick={() => setType("")} src={close}></img>
        <div className="innerSidebar ">
        {type == "template" && (
          <div
            className="col-md-12 bg-white pt-3 pb-5 inner-tab"
            id="f1"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{}}
          >
            <Template
              handleSidebar={(value, key) => {
                props.handleSidebar(value, key);
                setType(null);
              }}
            />
          </div>
        )}

        {type == "background" && (
          <div
            className="col-md-12 bg-white pb-5 inner-tab"
            id="f1"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{}}
          >
            <Background
              handleSidebar={(value, key) => {
                props.handleSidebar(value, key);
              }}
            />
          </div>
        )}

        {type == "font" && (
          <div
            className="col-md-12 bg-white inner-tab"
            id="f1"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{}}
          >
            <Fonts
              handleSidebar={(value, key) => {
                props.handleSidebar(value, key);
              }}
            />
          </div>
        )}
        {type == "info" && (
          <div
            className="col-md-12 bg-white pb-5 inner-tab"
            id="f1"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{}}
          >
            <BasicInfo
              basicInfoUpdate={basicInfoUpdate}
              handleSidebar={(value, key) => {
                props.handleSidebar(value, key);
              }}
              basic_info={props.basic_info}
            />
          </div>
        )}
        {type == "layout" && (
          <div
            className="col-md-12 bg-white pb-5 inner-tab"
            id="f1"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{ padding: "8px" }}
          >
            <Layout
              sample_map={
                props.resume_detail ? props.resume_detail.sample_map : {}
              }
              handleSidebar={(value, key) => {
                props.handleSidebar(value, key);
              }}
            />
          </div>
        )}
      </div></div>}
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  updateUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
