import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Shimmer from '../../widgets/shimmerEffect';
import { getResume, deleteResume } from "../../../actions/resume";
import { templates } from "../../../configs"
const Index = (props) => {

    useEffect(() => {
        props.getResume();
    }, [props.getResume])
    console.log(props)

    const handleDelete = (id) => {
        props.deleteResume(id)
    }

    const getResume = (items) => {
        let h= [];

        const getImgUrl = (id) => {
            let url = '';
            for(var i in templates){
                if(templates[i].id === id){
                    url = templates[i].img;
                    break;
                }
            }
            return url ? url : "https://ik.imagekit.io/lcq5etn9k/resume/placeholder_BkLi0LBKG.jpg";
        }

        items && items.map((itm) => 
            h.push(
            <>
                <div className="col-md-7">
                    <img src={getImgUrl(itm.template_id) ? getImgUrl(itm.template_id) : "fvdf"} className="w-100" ></img>
                    <p className="text-center f-13">Version 1 <br/>Last Modification {itm.updatedAt.split('T')[0]}</p>
                </div>
                <div className="col-md-5">
                    <Link to={`/resume-maker/edit/${itm.id}`} className="btn btn-sm btn-primary btn-round w-100 mb-1 text-left mt-5" ><i className="mdi mdi-lead-pencil"></i> Edit</Link>
                    <span className="btn btn-sm btn-success btn-round w-100 mb-1 text-left" href="#"><i className="mdi mdi-cloud-download"></i> Download</span>
                    <span className="btn btn-sm btn-danger btn-round w-100 mb-1 text-left" onClick={() => handleDelete(itm.id)}><i className="mdi mdi-delete"></i> Delete</span>
                </div>
                </>
            )
        )

        return h;
    }
    if(props.loading){
        return <Shimmer />
    }
    return(
        <section className="align-items-center pt-5">
            <div className="container">
                <div className="row align-items-center mt-5 pt-2 mb-4 text-center">
                    <div className="col-lg-12"> <h1 className="home-title">My Resume</h1></div>
                </div>
                <div className="row">
                <div className="col-md-6"><Link className="btn  btn-primary btn-round w-100 mb-4" to="/templates"><i className="mdi mdi-plus"></i> Create New Version</Link></div>
                    <div className="col-md-6"><Link className="btn  btn-outline-primary btn-round w-100 mb-4" to="/pricing"><i className="mdi mdi-lock-open"></i> Compare free and premium feature</Link></div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="row">
                            {props.resumeList && props.resumeList.length ? getResume(props.resumeList) : "No Resumes available"}   
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = ( state ) => ( {
    resumeList: state.resume.resumes,
    loading : state.resume.resume_detail_loading
} );

const mapDispatchToProps = {
    getResume,
    deleteResume
};

export default connect( mapStateToProps, mapDispatchToProps )( Index );
