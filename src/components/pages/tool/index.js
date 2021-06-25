import React, { useEffect , useState } from 'react';
import { connect } from "react-redux";
import SideBar from "./sideBar";
import { createResume , updateLocalState , getResumeById , updateResume , downLoadResume } from "../../../actions/tool";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/globals";
import Auth from "../../pages/Auth";
import Shimmer from "../../widgets/shimmerEffect";
import Temp1 from "./templates/temp-1";
import { BASE_URL } from "../../../API/config"
function Index (props){
    const [showLogin , setShowLogin] = useState(false);
    const [resume_detail , setResumeDetail] = useState({});
    const [basic_info , setBasicInfo] = useState({});
    const [type , setType] = useState("");
    
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
        // console.log(value.target.innerHTML)
        switch(key){
            case "job_title":
                props.updateLocalState({...resume_detail, extra : {...(resume_detail.extra || {}), job_title : value }})
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
            case 'patents':
                props.updateLocalState({...resume_detail, patents : value})
                break;
            case 'references':
                props.updateLocalState({...resume_detail, references : value})
                break;
    
            default:
                // props.updateLocalState({...resume_detail , summary : value})
            
        }
    }

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
            case 2:
            default:
                return <Temp1 basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>    
        }
    }

    const saveResume = () => {
        console.log(resume_detail)
        props.updateResume(resume_detail.id , resume_detail);
    }
    console.log(resume_detail , props)
    return (
        <section className="mt-5 pt-2">
            <div className="tool bg-dark mt-5">
                <div className="container">
                    <div className="row">
                        <SideBar handleSidebar={handleSidebar} type={type} setType={setType} resume_detail={resume_detail} basic_info={props.basic_info}/>
                        <div className="col-md-10 p-5">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button className="btn btn-primary d-inline-block"><span className="mdi mdi-share"></span>Share</button>
                                    <button className="btn btn-danger d-inline-block" onClick={saveResume}><span className="mdi mdi-eye"></span>Save</button>
                                    <button className="btn btn-success d-inline-block" onClick={downloadResume}><span className="mdi mdi-download"></span>Download</button>
                                    <button className="btn btn-white d-inline-block"><span className="mdi mdi-plus"></span> </button>
                                </div>
                                <div className="col-md-12">
                                    {/* <canvas> */}
                                        {getResume(resume_detail.template_id)}
                                    {/* </canvas> */}
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
    updateResume,
    downLoadResume
};

export default connect( mapStateToProps, mapDispatchToProps )( Index );
   