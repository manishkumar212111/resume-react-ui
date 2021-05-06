import React, { useState } from 'react';


import f1 from "../../../scss/images/f1.svg";
import f2 from "../../../scss/images/f2.svg";
import f3 from "../../../scss/images/f3.svg";
import f4 from "../../../scss/images/f4.svg";
import f5 from "../../../scss/images/f5.svg";
import f6 from "../../../scss/images/f6.svg";
import f7 from "../../../scss/images/f7.svg";
import f8 from "../../../scss/images/f8.svg";
import feature from "../../../scss/images/feature.svg";

const data =[
        {text : "Modern templates" , img : f1, sideImg : feature , sideText : "Beneifits of using our product"},
        {text : "Create multiple version" , img : f2 , sideImg : f2 , sideText : "Beneifits of using our product"},
        {text : "Formating and editing tools" , img : f3 , sideImg : feature , sideText : "Beneifits of using our product"},
        {text : "Live preview mode" , img : f4 , sideImg : feature , sideText : "Beneifits of using our product"},
        {text : "Full customizable Design" , img : f5 , sideImg : feature , sideText : "Beneifits of using our product"},
        {text : "On page editors" , img : f6 , sideImg : feature , sideText : "Beneifits of using our product"},
        {text : "Unlimited download" , img : f7 , sideImg : feature , sideText : "Beneifits of using our product"},
        {text : "Data is safe" , img : f8 , sideImg : feature , sideText : "Beneifits of using our product"}
    
    ]

export default function Features(props){
    const [active , setActive] = useState(0);
    return(
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
                                    <div className="tab-pane fade show active" id="f1" role="tabpanel" aria-labelledby="pills-home-tab"><img className="d-block w-100 mt-3" src={data[active].sideImg} alt="work-img" /></div>
                                </div>

                            </div>
                            <div className="col-lg-7">
                                <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist">
                                    { data.map((item , i) => (
                                    <li style={{'cursor' : 'pointer'}} onClick={()=>setActive(i)} className="nav-item col-md-6 mt-3" role="presentation">
                                        <span className={`nav-link shadow p-3 ${active == i ? 'active' : ''}`} id="pills-home-tab" data-toggle="pill" href="#f1" role="tab" aria-controls="pills-home" aria-selected="true"><img className="d-inline-block w-20" src={item.img} alt="work-img" /> {item.text}</span>
                                    </li>))}
                                    
                                </ul>
                                <a href="#" className="btn btn-primary mt-5 d-block ">Try our resume builder now</a>


                            </div>


                        </div>


                    </div>
                </section>
    )
}