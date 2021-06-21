import React, { useEffect , useState } from 'react';
import { connect } from "react-redux";
import { createResume , updateLocalState , getResumeForDownload , updateResume } from "../../../../actions/tool";
// import { getLocalStorageItem, setLocalStorageItem } from "../../../../utils/globals";
import Shimmer from "../../../widgets/shimmerEffect";
import Temp1 from "../templates/temp-1";

function Download (props){
    const [resume_detail , setResumeDetail] = useState({});
    const [basic_info , setBasicInfo] = useState({});
    const [type , setType] = useState("");
    
    useEffect(() => {
            if(props.match.params.id){
                props.getResumeForDownload(props.match.params.id)
            }
    }, [props.getResumeForDownload]);

    useEffect(() => {
        setResumeDetail(props.resume_detail);  
    }, [props.resume_detail]);


    useEffect(() => {
        setBasicInfo(props.basic_info);  
    }, [props.basic_info]);

    useEffect(() => {
        document.querySelector('.navbar') && document.querySelector('.navbar').remove();
        document.getElementById('footer') && document.getElementById('footer').remove();

    }, [])

    const handleToolEvent = (value , key) => {
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
                return <Temp1 downloads = {true} basic_info={basic_info} resume_detail={resume_detail} sideBarCb={(type) => setType(type)} handleToolEvent={handleToolEvent}/>    
        }
    }

    console.log(resume_detail , props)
    return (
        // <section className="mt-5 pt-2">
        //     <div className="tool bg-dark mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <canvas> */}
                                        {getResume(resume_detail.template_id)}
                                    {/* </canvas> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        //     </div>

        // </section>
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
    getResumeForDownload,
    updateResume
};

export default connect( mapStateToProps, mapDispatchToProps )( Download );
   