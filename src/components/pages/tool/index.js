import React, { useEffect , useState } from 'react';
import { connect } from "react-redux";
import SideBar from "./sideBar";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/globals";
import Auth from "../../pages/Auth";

function Index (props){
    const [showLogin , setShowLogin] = useState(false);

    useEffect(() => {
        if(!getLocalStorageItem('userDetail').user){ 
            window.login_redirect = window.location.href ? window.location.href : "lkjkjhjhj";
            setShowLogin(true);
            return;
          }
    } , [])
    console.log(props);
    return (
        <section className="mt-5 pt-2">
            <div className="tool bg-dark mt-5">
                <div className="container">
                    <div className="row">
                        <SideBar />
                        <div className="col-md-6 p-5">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button className="btn btn-primary d-inline-block"><span className="mdi mdi-share"></span>Share</button>
                                    <button className="btn btn-danger d-inline-block"><span className="mdi mdi-eye"></span>Preview</button>
                                    <button className="btn btn-success d-inline-block"><span className="mdi mdi-download"></span>Download</button>
                                    <button className="btn btn-white d-inline-block"><span className="mdi mdi-plus"></span> </button>
                                </div>
                                <div className="col-md-12">
                                    <canvas></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { showLogin && <Auth showLogin={true} />}

        </section>
    )
}

export default Index;   