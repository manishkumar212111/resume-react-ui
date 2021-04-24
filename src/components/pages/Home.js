import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/home";
import { checkLogin } from "../../utils/globals";
import TextEditor from "../../components/widgets/TextEditor";
import headerImg from "../../scss/images/features/bg-1.svg";

import Carousal from "../widgets/carousal";
import Benefits from "../widgets/benefits";
import { templates } from "../../configs";


import start1 from "../../scss/images/start1.svg";
import start2 from "../../scss/images/start2.svg";
import start3 from "../../scss/images/start3.svg";
import start4 from "../../scss/images/start4.svg";

import beforfooter from "../../scss/images/beforfooter.svg";
import Features from "../widgets/features";

class Home extends React.Component {
    constructor(props){
        super();
        this.logout = this.logout.bind(this);
    }
    componentDidMount( ) {
        if ( this.props.users && this.props.users.length <= 0 ) {
            this.props.fetchData();
        }
    }

    logout(){
        if(typeof window !== 'undefined'){
            window.localStorage.removeItem('userDetail');
            window.location.href = '/';
        }
    }
    render( ) {
        const userDetails = checkLogin();
        const { users } = this.props;

        const getMyAccount = (userDetails) => {
            return (
                <div>
                    {/* <TextEditor /> */}
                    <a href="/my-account">My Account ({userDetails.user.first_name} {userDetails.user.last_name}) </a>
                    <span classNameName="link" onClick={() => this.logout()}> Logout</span>
                </div>
            )
        }

        return (
            <div>
                 <section className="bg-home align-items-center" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="home-contact mt-4">


                                    <h1 className="home-title mt-3 mb-0">Lorem ipsum dolor</h1>
                                    <h1 className="home-title">Lorem ipsum dolor <span className="element text-primary" data-elements="sit a egestas risus."></span></h1>

                                    <p className="text-muted mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui libero sagittis, sit a egestas risus.
                                    </p>

                                    <div className="mt-4 pt-3">
                                        <a href="" className="btn btn-primary ">Get started for free</a>
                                        <a href="" className="btn btn-outline-primary">Create your resume for free</a>
                                    </div>


                                </div>
                            </div>

                            <div className="col-lg-6">

                                <img src={headerImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <Benefits />


                <section className="section bg-light mt-5 pt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">

                                    <h2 className="title-heading"><mark></mark>Industry recognized, professionally recommend ready to use template</h2>
                                    <p className="title-desc text-muted mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui libero sagittis, sit a egestas risus.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row mt-4 pt-3">
                            <div className="col-lg-12">
                                
                        <Carousal show={4}>

                        {
                            templates.map((item) => (
                                        <div className="col-md-3">
                                            <img src={item.img} className="d-block w-100" height="294" loading="lazy" alt="..." />
                                        </div>

                                    ))
                                }
                                                

                                    
                                </Carousal>
                        
                            </div>
                            <div className="col-md-4 offset-4">
                                <a href="" className="btn btn-light mt-5 d-block ">View more resume templates for free <span className="mdi mdi-arrow-right"></span></a>
                            </div>

                        </div>
                    </div>
                </section>



                <Features />


                <section className="section mt-5 pt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">

                                    <h2 className="title-heading"><mark></mark>Getting started is super easy</h2>
                                    <p className="text-muted mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui libero sagittis, sit a egestas risus.</p>

                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-3 text-center">
                                <img src={start1} className="imgcenter" />
                                <p>1. Sign-up / Login</p>
                            </div>
                            <div className="col-lg-3 text-center">
                                <img src={start2} className="imgcenter"/>
                                <p>2. Select template</p>
                            </div>
                            <div className="col-lg-3 text-center">
                                <img src={start3} className="imgcenter"/>
                                <p>3. Fill in Information</p>
                            </div>
                            <div className="col-lg-3 text-center">
                                <img src={start4} className="imgcenter"/>
                                <p>4. Download</p>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                <a href="" className="btn btn-light mt-5 d-block ">Get started today only<span className="mdi mdi-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-5 pt-3 line-box ">
                    <div className="container">

                        <div className="row mt-3">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className=" w-100">
                                            <h3 className="f-18"><mark></mark> Discover our premium options</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Dui libero sagittis, sit a egestas risus.</p>
                                            <a href="#" className="btn btn-light mt-1 ">Find out more <span className="mdi mdi-arrow-right"></span></a>

                                        </div>
                                        <div className=" w-100 mt-5">
                                            <h3 className="f-18">Articles on resume building tips, and our product feature</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Dui libero sagittis, sit a egestas risus.</p>
                                            <a href="#" className="btn btn-light mt-1 ">Find out more <span className="mdi mdi-arrow-right"></span></a>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className=" w-100">
                                            <h3 className="f-18">Frequent questions and answers</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Dui libero sagittis, sit a egestas risus.</p>
                                            <a href="#" className="btn btn-light mt-1 ">Find out more <span className="mdi mdi-arrow-right"></span></a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <img src={beforfooter} className="w-100 mt-5"/>
                            </div>

                        </div>

                    </div>
                </section>

                {/* {userDetails ? getMyAccount(userDetails) : <a href="/auth">Get started</a>}
                {users && users.length && <h2>User List</h2>}
                <ul>
                    { users && users.length && users.map( (item ) => (
                        <li key={ item.first_name } >{ item.first_name } { item.email }</li>
                    ) ) }
                </ul> */}
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    users: state.Home.users.results,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
