import React, { useEffect } from 'react';
import { connect } from "react-redux"; 
import { Shimmer } from 'react-shimmer';
import { GetBlogById } from "../../../actions/blog";
import { Helmet } from "react-helmet";
const BlogDetail = (props) => {
    
    useEffect(() => {
        props.GetBlogById(props.match.params.id);
    }, [props.GetBlogById])
    
    if(props.loading){
        return <Shimmer />
    }
    console.log(props)    
    return(
        <section className="align-items-center pt-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.blogDetail.title}</title>
                <meta name="description" content={props.blogDetail.metaDescription} />

            </Helmet>
            <div className="container">
                <div className="row align-items-center mt-5 pt-2 mb-4 text-center">
                    <div className="col-lg-12"> <h1 className="home-title">{props.blogDetail.title}</h1></div>
                </div>
                <div className="row">
                {props.blogDetail && props.blogDetail.content && <div dangerouslySetInnerHTML={{ __html: props.blogDetail.content.replaceAll('&lt;' , '<') }}></div>}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = ( state ) => ( {
    blogDetail: state.blog.blogDetail ? state.blog.blogDetail : {},
    loading : state.blog.blog_detail_loading
} );

const mapDispatchToProps = {
    GetBlogById
};

export default connect( mapStateToProps, mapDispatchToProps )( BlogDetail );
