import React, { useEffect , useState } from 'react';
import { connect } from "react-redux";
import SideBar from "./sideBar";
import { createResume , updateLocalState ,updateUserProfileImage, getResumeById , updateResume , downLoadResume, updateUserInfo } from "../../../actions/tool";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/globals";
import Auth from "../../pages/Auth";
import Shimmer from "../../widgets/shimmerEffect";
import Temp1 from "./templates/temp-1";
import Temp2 from "./templates/temp-2";
import Temp3 from "./templates/temp-3";
import Temp4 from "./templates/temp-4";
import Temp5 from "./templates/temp-5";
import {ShareSocial} from 'react-share-social' 

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    position: "fixed",
    zIndex: "99",
    border: 0,
    top:"25%",
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };

import { BASE_URL } from "../../../API/config"
import Form from './form/Form';
function Index (props){
    const [showLogin , setShowLogin] = useState(false);
    const [resume_detail , setResumeDetail] = useState({});
    const [basic_info , setBasicInfo] = useState({});
    const [type , setType] = useState("");
    const [sidebarOpened , setSideBarOpen] = useState("content");
    const [showShare , setShowShare] = useState(false)
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
            } else{
                props.createResume({
                    template_id : props.match.params.template_id
                });
            }

    }, [props.createResume]);

    // useEffect(() => {
    //         !(resume_detail && resume_detail.template_id) && props.match.params.id && props.getResumeById(props.match.params.id)  
    // });


    useEffect(() => {
        setResumeDetail(props.resume_detail);  
    }, [props.resume_detail]);


    useEffect(() => {
        setBasicInfo(props.basic_info);  
    }, [props.basic_info]);

    const handleSidebar = (value , key) => {
        console.log(value , key, "sdvkdjfvnjknkjnkjnkjnjknk");
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
            case 'font':
                props.updateLocalState({...resume_detail, style : {...resume_detail.style , fontType : value}})
                break;
            case 'fontPairing':
                props.updateLocalState({...resume_detail, style : {...resume_detail.style , fontPairing : value}})
                break;
            case 'fontSize':
                props.updateLocalState({...resume_detail, style : {...resume_detail.style , fontSize : value}})
                break;
            case 'icons':
                props.updateLocalState({...resume_detail, style : {...resume_detail.style , icons : value}})
                break;
            case 'sample_map':
                props.updateLocalState({...resume_detail, sample_map : value})
                break;
        }
    }

    const handleToolEvent = (value , key) => {
        console.log(value , key, "fdvlkdnfvn in handle tool")
        switch(key){
            case "job_title":
                props.updateLocalState({...resume_detail, job_title : value })
                break;
            case 'education':
                props.updateLocalState({...resume_detail, education : value})
                break;
            case 'experience':
                props.updateLocalState({...resume_detail, employment_history : value})
                break;
            case 'skills':
                props.updateLocalState({...resume_detail, skills : {...resume_detail.skills , skills : value}})
                break;
            case 'softSkills':
                props.updateLocalState({...resume_detail, skills : {...resume_detail.skills , softSkills : value}})
                break;
            
            case 'awards':
                props.updateLocalState({...resume_detail, awards : value})
                break;
            case 'summary':
                props.updateLocalState({...resume_detail, summary : value})
                break;
            case 'conference':
                props.updateLocalState({...resume_detail, conferences : value})
                break;
            case 'volunteer':
                props.updateLocalState({...resume_detail, volunteers : value})
                break;
            case 'custom_field':
                props.updateLocalState({...resume_detail, custom_field : value})
                break;
            case 'hobbies':
                props.updateLocalState({...resume_detail, hobbies : value})
                break;
            case 'languages':
                props.updateLocalState({...resume_detail, languages : value})
                break;
            case 'publications':
                props.updateLocalState({...resume_detail, publications : value})
                break;
            case 'certifications':
                props.updateLocalState({...resume_detail, certifications : value})
                break;
            case 'trainings':
                props.updateLocalState({...resume_detail, trainings : value})
                break;
            case 'achievements':
                props.updateLocalState({...resume_detail, achievements : value})
                break;
            case 'patents':
                props.updateLocalState({...resume_detail, patents : value})
                break;
            case 'references':
                props.updateLocalState({...resume_detail, references : value})
                break;
            case "social_account":
                setBasicInfo(basic => ({ ...basic , social_account : value } )  )
                break;
            case "basic_info":
                console.log(value, "dfv dfkj ")
                setBasicInfo(basic => ({ ...basic , ...value} )  )
                break;
            default:
                // props.updateLocalState({...resume_detail , summary : value})
            
        }
    }
    console.log(basic_info)
    const downloadResume = () => {
        var link = document.createElement('a');
        link.href = BASE_URL + "api/common/template?product_id="+resume_detail.id;
        link.target = "_blank";
        
        link.download = "PdfName-" + new Date().getTime() + ".pdf";
        document.body.appendChild(link);
        link.click();
        
        // props.downLoadResume(resume_detail.id);
    }
    if(props.loading_tools){
        return(
            <Shimmer />
        )
    }
    const getResume = (template_id) => {
        switch(parseInt(template_id)){
            case 1:
                return <Temp1 basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>    
            case 2:
                return <Temp2 basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>    
            case 3:
                return <Temp3 basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>    
            case 4:
                return <Temp4 basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>    
            case 5:
                return <Temp5 basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>    
        
            default:
        }
    }

    const saveResume = () => {
        console.log(resume_detail)
        delete resume_detail.profileImage;
        props.updateResume(resume_detail.id , resume_detail);
        props.updateUserInfo(basic_info);
    }
    console.log(resume_detail , props)
    return (
        <section className="mt-5 pt-2">
            <div className="tool bg-dark mt-5">
                <div className="container" style={{marginRight : 0, marginLeft : 0, maxWidth: "100%"}}>
                    <div className="row">
                        <div className="col-md-12 text-center mt-4 group-cta">                                     
                            <button className="btn btn-primary d-inline-block mr-2" onClick={() => setShowShare(!showShare)}>
                                <i class="fas fa-share-alt"></i> Share
                            </button>
                            <button className="btn btn-danger d-inline-block mr-2" onClick={saveResume}>
                                <i class="fas fa-eye"></i> Save
                            </button>
                            <button className="btn btn-success d-inline-block mr-2" onClick={downloadResume}>
                                <i class="fas fa-file-pdf"></i> Download
                            </button>
                            {/* <button className="btn btn-white d-inline-block mr-2"><span className="mdi mdi-plus"></span> </button> */}
                        </div>
                    </div>

                    <div className="row">
                        <SideBar setSideBarOpen={setSideBarOpen} handleSidebar={handleSidebar} type={type} setType={setType} resume_detail={resume_detail} basic_info={props.basic_info}/>
                        {(sidebarOpened == "" || sidebarOpened == "content") && <div className={`${sidebarOpened ? "col-md-5" :  "col-md-5"} p-3`}>
                            <Form updateUserProfileImage={props.updateUserProfileImage} basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>
                        </div>}
                        {!(sidebarOpened == "" || sidebarOpened == "content") && <div className="col-md-4 p-5">
                        </div>}
                        
                        <div className={`${(sidebarOpened == "content" || sidebarOpened == "") ? "col-md-6" :  "col-md-6"} p-3`}>
                            <div className="row">                                
                                {showShare && <ShareSocial 
                                        style={style}
                                        url ={`${process.env.REACT_APP_CLIENT_URL}downloads/${resume_detail.id}`}
                                        socialTypes={['facebook','twitter','reddit','linkedin', "Instapaper", "email" , "whatsapp"]}
                                    />}
                                <div className="col-md-12">
                                    <div  className="rmf_thin_scroll p-4">
                                        {/* <canvas> */}
                                            {getResume(resume_detail.template_id)}
                                        {/* </canvas> */}
                                    </div>
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
    basic_info: state.tool.basic_info,
    loading_tools : state.tool.loading_tools
} );

const mapDispatchToProps = {
    createResume,
    updateLocalState,
    getResumeById,
    updateUserInfo,
    updateResume,
    downLoadResume,
    updateUserProfileImage
};

export default connect( mapStateToProps, mapDispatchToProps )( Index );
   