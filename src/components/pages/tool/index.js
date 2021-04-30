import React, { useEffect , useState } from 'react';
import { connect } from "react-redux";
import SideBar from "./sideBar";
import { createResume , updateLocalState , getResumeById } from "../../../actions/tool";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/globals";
import Auth from "../../pages/Auth";
import Shimmer from "../../widgets/shimmerEffect";

function Index (props){
    const [showLogin , setShowLogin] = useState(false);
    const [resume_detail , setResumeDetail] = useState({});
    useEffect(() => {
        if(!getLocalStorageItem('userDetail').user){ 
            window.login_redirect = window.location.href ? window.location.href : "";
            setShowLogin(true);
            return;
          }
    } , [])

    useEffect(() => {
        if(props.match.params.id){
            props.getResumeById(props.match.params.id)
        } else {
            props.createResume({
                template_id : props.match.params.template_id
            });
        }

    }, [props.createResume]);


    useEffect(() => {
        setResumeDetail(props.resume_detail);  
    }, [props.resume_detail]);

    const handleSidebar = (value , key) => {
        console.log(value , key);
        switch(key){
            case "template":
                props.updateLocalState({...resume_detail , template_id : value});
                // handle template    
                break;
            case 'background':
                props.updateLocalState({...resume_detail, style : {...resume_detail.style , background : value}})
                break;
            case 'theme':
                props.updateLocalState({...resume_detail, style : {...resume_detail.style , theme : value}})
                break;
            case 'text_color':
                props.updateLocalState({...resume_detail, style : {...resume_detail.style , text_color : value}})
                break;

        }
    }
    console.log(props , resume_detail);
    if(props.loading_tools){
        return(
            <Shimmer />
        )
    }
    return (
        <section className="mt-5 pt-2">
            <div className="tool bg-dark mt-5">
                <div className="container">
                    <div className="row">
                        <SideBar handleSidebar={handleSidebar} resume_detail={resume_detail}/>
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

const mapStateToProps = ( state ) => ( {
    resume_detail: state.tool.resume_detail,
    loading_tools : state.tool.loading_tools
} );

const mapDispatchToProps = {
    createResume,
    updateLocalState,
    getResumeById
};

export default connect( mapStateToProps, mapDispatchToProps )( Index );
   