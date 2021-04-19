import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/home";
import { checkLogin } from "../../utils/globals";
import TextEditor from "../../components/widgets/TextEditor";
import headerImg from "../../scss/images/features/bg-1.svg";
import ats from "../../scss/images/ats.svg";
import instant from "../../scss/images/instant.svg";
import easy from "../../scss/images/professional.svg";
import professional from "../../scss/images/easy.svg";
import create from "../../scss/images/create.svg";
import ready from "../../scss/images/ready.svg";

import ats1 from "../../scss/images/ats1.svg";
import instant1 from "../../scss/images/instant-1.svg";
import easy1 from "../../scss/images/professional-1.svg";
import professional1 from "../../scss/images/easy-1.svg";
import create1 from "../../scss/images/create-1.svg";
import ready1 from "../../scss/images/ready-1.svg";

import feature from "../../scss/images/feature.svg";

import r1 from "../../scss/images/r1.png";
import r2 from "../../scss/images/r2.png";
import r3 from "../../scss/images/r3.png";
import r4 from "../../scss/images/r4.png";

import f1 from "../../scss/images/f1.svg";
import f2 from "../../scss/images/f2.svg";
import f3 from "../../scss/images/f3.svg";
import f4 from "../../scss/images/f4.svg";
import f5 from "../../scss/images/f5.svg";
import f6 from "../../scss/images/f6.svg";
import f7 from "../../scss/images/f7.svg";
import f8 from "../../scss/images/f8.svg";

import start1 from "../../scss/images/start1.svg";
import start2 from "../../scss/images/start2.svg";
import start3 from "../../scss/images/start3.svg";
import start4 from "../../scss/images/start4.svg";

import beforfooter from "../../scss/images/beforfooter.svg";

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

                <section className="section pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2 className="title-heading"><mark></mark>Benefits of using our product</h2>
                                    <p className="title-desc text-muted mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui libero sagittis, sit a egestas risus.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 pt-4">
                            <div className="col-md-6">
                                <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                                    <a className="mt-3 mr-2 text-center features-box nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#ATS" role="tab" aria-controls="ATS" aria-selected="true"><img className="d-block mt-3" src={ats} alt="work-img" /> ATS friendly templates</a>
                                    <a className="mt-3 mr-2 text-center features-box nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#Instant" role="tab" aria-controls="Instant" aria-selected="false"><img  className="d-block mt-3" src={instant} alt="work-img" /> Instant Customization</a>
                                    <a className="mt-3 mr-2 text-center features-box nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#Easy" role="tab" aria-controls="Easy" aria-selected="false"><img  className="d-block mt-3" src={easy} alt="work-img" /> Easy to update and quick to access </a>
                                    <a className="mt-3 mr-2 text-center features-box nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#Professional" role="tab" aria-controls="Professional" aria-selected="false"><img  className="d-block mt-3" src={professional} alt="work-img" /> Professional resume templates</a>
                                    <a className="mt-3 mr-2 text-center features-box nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#Create" role="tab" aria-controls="Create" aria-selected="false"><img  className="d-block mt-3" src={create} alt="work-img" /> Create resume in minutes</a>
                                    <a className="mt-3 mr-2 text-center features-box nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#Ready" role="tab" aria-controls="Ready" aria-selected="false"><img className="d-block mt-3" src={ready} alt="work-img" /> Ready to use templates</a>
                                </div>
                                <a href="" className="btn btn-primary mt-5 d-block ">Start building your resume</a>
                            </div>
                            <div className="col-lg-6 tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active text-center" id="ATS" role="tabpanel" aria-labelledby="v-pills-home-tab"><img className="d-block mt-3" src={ats1} alt="work-img" /><p className="mt-3">Benefits of using our product</p></div>
                                    <div className="tab-pane fade text-center" id="Instant" role="tabpanel" aria-labelledby="v-pills-profile-tab"><img className="d-block mt-3" src={instant1} alt="work-img" /><p className="mt-3">Benefits of using our product</p></div>
                                    <div className="tab-pane fade text-center" id="Easy" role="tabpanel" aria-labelledby="v-pills-messages-tab"><img className="d-block mt-3" src={easy1} alt="work-img" /><p className="mt-3">Benefits of using our product</p></div>
                                    <div className="tab-pane fade text-center" id="Professional" role="tabpanel" aria-labelledby="v-pills-settings-tab"><img className="d-block mt-3" src={professional1} alt="work-img" /><p className="mt-3">Benefits of using our product</p></div>
                                <div className="tab-pane fade text-center" id="Create" role="tabpanel" aria-labelledby="v-pills-settings-tab"><img className="d-block mt-3" src={create1} alt="work-img" /><p className="mt-3">Benefits of using our product</p></div>
                                <div className="tab-pane fade text-center" id="Ready" role="tabpanel" aria-labelledby="v-pills-settings-tab"><img className="d-block mt-3" src={ready1} alt="work-img" /><p className="mt-3">Benefits of using our product</p></div>



                            </div>


                        </div>
                    </div>
                </section>


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
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                            <div className="col-md-3"> <img src={r1} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r2} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r3} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r4} className="d-block w-100" alt="..." /></div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-3"> <img src={r1} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r2} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r3} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r4} className="d-block w-100" alt="..." /></div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-3"> <img src={r1} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r2} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r3} className="d-block w-100" alt="..." /></div>
                                                <div className="col-md-3"> <img src={r4} className="d-block w-100" alt="..." /></div>
                                            </div>
                                        </div>

                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                            <div className="col-md-4 offset-4">
                                <a href="" className="btn btn-light mt-5 d-block ">View more resume templates for free <span className="mdi mdi-arrow-right"></span></a>
                            </div>

                        </div>
                    </div>
                </section>



                <section className="section pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2 className="title-heading"><mark></mark>Feature of our product</h2>
                                    <p className="title-desc text-muted mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui libero sagittis, sit a egestas risus.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 pt-4">
                            <div className="col-md-5">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="f1" role="tabpanel" aria-labelledby="pills-home-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>
                                    <div className="tab-pane fade" id="f2" role="tabpanel" aria-labelledby="pills-profile-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>
                                    <div className="tab-pane fade" id="f3" role="tabpanel" aria-labelledby="pills-contact-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>
                                    <div className="tab-pane fade" id="f4" role="tabpanel" aria-labelledby="pills-contact-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>
                                    <div className="tab-pane fade" id="f5" role="tabpanel" aria-labelledby="pills-home-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>
                                    <div className="tab-pane fade" id="f6" role="tabpanel" aria-labelledby="pills-profile-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>
                                    <div className="tab-pane fade" id="f7" role="tabpanel" aria-labelledby="pills-contact-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>
                                    <div className="tab-pane fade" id="f8" role="tabpanel" aria-labelledby="pills-contact-tab"><img className="d-block w-100 mt-3" src={feature} alt="work-img" /></div>

                                </div>

                            </div>
                            <div className="col-lg-7">
                                <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist">
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link active shadow p-3" id="pills-home-tab" data-toggle="pill" href="#f1" role="tab" aria-controls="pills-home" aria-selected="true"><img className="d-inline-block w-20" src={f1} alt="work-img" /> Modern templates</a>
                                    </li>
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link shadow p-3" id="pills-profile-tab " data-toggle="pill" href="#f2" role="tab" aria-controls="pills-profile" aria-selected="false"><img className="d-inline-block w-20" src={f2} alt="work-img" />  reate multiple version</a>
                                    </li>
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link shadow p-3" id="pills-contact-tab" data-toggle="pill" href="#f3" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-inline-block w-20" src={f3} alt="work-img" /> Formating and editing tools</a>
                                    </li>
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link shadow p-3" id="pills-contact-tab" data-toggle="pill" href="#f4" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-inline-block w-20" src={f4} alt="work-img" /> Live preview mode                               </a>

                                    </li>
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link shadow p-3" id="pills-contact-tab " data-toggle="pill" href="#f5" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-inline-block w-20" src={f5} alt="work-img" /> Full customizable Design</a>
                                    </li>
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link shadow p-3" id="pills-contact-tab " data-toggle="pill" href="#f6" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-inline-block w-20" src={f6} alt="work-img" /> On page editors </a>
                                    </li>
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link shadow p-3" id="pills-contact-tab " data-toggle="pill" href="#f7" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-inline-block w-20" src={f7} alt="work-img" /> Unlimited download </a>
                                    </li>
                                    <li className="nav-item col-md-6 mt-3" role="presentation">
                                        <a className="nav-link shadow p-3" id="pills-contact-tab " data-toggle="pill" href="#f8" role="tab" aria-controls="pills-contact" aria-selected="false"><img className="d-inline-block w-20" src={f8} alt="work-img" /> Data is safe</a>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary mt-5 d-block ">Try our resume builder now</a>


                            </div>


                        </div>


                    </div>
                </section>



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
