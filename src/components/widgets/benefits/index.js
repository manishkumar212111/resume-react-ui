import React, { useState } from 'react';
import ats from "../../../scss/images/ats.svg";
import instant from "../../../scss/images/instant.svg";
import easy from "../../../scss/images/professional.svg";
import professional from "../../../scss/images/easy.svg";
import create from "../../../scss/images/create.svg";
import ready from "../../../scss/images/ready.svg";

import ats1 from "../../../scss/images/ats1.svg";
import instant1 from "../../../scss/images/instant-1.svg";
import easy1 from "../../../scss/images/professional-1.svg";
import professional1 from "../../../scss/images/easy-1.svg";
import create1 from "../../../scss/images/create-1.svg";
import ready1 from "../../../scss/images/ready-1.svg";

const data =[
        {text : "ATS friendly templates" , img : ats, sideImg : ats1 , sideText : "Beneifits of using our product"},
        {text : "Instant Customization" , img : instant , sideImg : instant1 , sideText : "Beneifits of using our product"},
        {text : "Easy to update and quick to access" , img : easy , sideImg : easy1 , sideText : "Beneifits of using our product"},
        {text : "Professional resume templates" , img : professional , sideImg : professional1 , sideText : "Beneifits of using our product"},
        {text : "Create resume in minutes" , img : create , sideImg : create1 , sideText : "Beneifits of using our product"},
        {text : "Ready to use templates" , img : ready , sideImg : ready , sideText : "Beneifits of using our product"}
    ]

export default function Benefits(props){
    const [active , setActive] = useState(0);
    return(
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
                                    { data.map((item , i) => (
                                        <span style={{'cursor' : 'pointer'}} onClick={() => setActive(i)} className={`mt-3 mr-2 text-center features-box nav-link ${active == i ? 'active' : ''}`} id="v-pills-home-tab" data-toggle="pill" href="#ATS" role="tab" aria-controls="ATS" aria-selected="true">
                                            <img className="d-block mt-3" src={item.img} alt="work-img" /> {item.text}
                                        </span>
                                    ))
                                    }
                                    
                                </div>
                                <a href="" className="btn btn-primary mt-5 d-block ">Start building your resume</a>
                            </div>
                            <div className="col-lg-6 tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active text-center" id="ATS" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <img className="d-block mt-3" src={data[active].sideImg} alt="work-img" /><p className="mt-3">{data[active].sideText}</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
    )
}