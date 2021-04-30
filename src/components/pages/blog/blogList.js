import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"; 
import { Link } from 'react-router-dom';
import { getBlogs } from "../../../actions/blog";
import Shimmer from "../../widgets/shimmerEffect";
import ReactPaginate from 'react-paginate';

const BlogList = (props) => {
    const [ active , setActive] = useState(1);
    

    useEffect(() => {
        props.getBlogs({page:1});
    } , [props.getBlogs])

    const handelPageChange= (pageNumber) => {
        console.log(pageNumber)
        console.log(`active page is ${pageNumber}`);
        props.getBlogs({page:pageNumber.selected + 1});
      }
    console.log(props);
    
    const getArticles = (items) => {
        let h = [];
        items && items.map((elem) => h.push(
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Link to={`/blogs/${elem.id}`}><img src={elem.thumbnail_url ? elem.thumbnail_url : "https://ik.imagekit.io/lcq5etn9k/resume/placeholder_BkLi0LBKG.jpg"} className="w-100"/></Link>
                        <i className="mdi mdi-facebook-box social"></i>
                        <i className="mdi mdi-twitter-box social"></i>
                        <i className="mdi mdi-linkedin-box social "></i>
                    </div>
                    <div className="col-md-6"> 
                    <Link to={`/blogs/${elem.id}`}><h6>{elem.title}</h6>
                        <p>{elem.shortDescription}</p></Link>
                    </div>
                </div>
            </div>
        ))
        return h;
    }
    
    if(props.loading){
        return <Shimmer />
    }
    return(
        <section className="align-items-center pt-5">
            <div className="container">
                <div className="row align-items-center mt-5 pt-2 mb-4 text-center">
                    <div className="col-lg-12"> <h1 className="home-title">Blog</h1></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Articles on device for job-seekers </h3>
                        <p>We can help you perfecdt your resume like never before. But we can also help you shin e during your live interview-the second big step in the hiring process. Tips on presenting your self, projecdting the correct image, imporving your genreral interview skills.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Articles on device for job-seekers </h3>
                        <a className="btn  btn-primary btn-round w-100 mb-4" href="#">Start Build your Resume</a>
                    </div>
                    <div className="col-md-12 border-bottom mb-3 mt-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-12"> <h3 className="mb-4"><i className="mdi mdi-pin"></i> Articles on device for job-seekers </h3></div>
                    {getArticles(props.blogList.results)}    
                    <div className="col-md-12 border-bottom mb-3 mt-3"></div>
                </div>
            
                <div id="react-paginate">
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        forcePage={props.blogList.page -1}
                        breakLabel={'...'}
                        previousClassName={"btn"}
                        nextClassName={"btn"}
                        pageClassName="paginate"
                        breakClassName={'break-me'}
                        pageCount={props.blogList.totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={props.blogList.limit}
                        onPageChange={handelPageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = ( state ) => ( {
    blogList: state.blog.blogs,
    loading : state.blog.blog_detail_loading
} );

const mapDispatchToProps = {
    getBlogs
};

export default connect( mapStateToProps, mapDispatchToProps )( BlogList );
