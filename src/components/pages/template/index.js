import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories , templates} from "../../../configs"
const Index = () => {
    const [active , setActive] = useState(0);
    const [ itemList , setItemList] = useState(templates);
    const [hover , setHover] = useState('')
    const handleTabClick = (itm , index) => {
        setActive(index);
    }

    return(
        <section className="align-items-center pt-5">
            <div className="container">
                <div className="row align-items-center mt-5 pt-2 mb-4 text-center">
                    <div className="col-lg-12"> <h1 className="home-title">Templates</h1></div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://ik.imagekit.io/lcq5etn9k/resume/placeholder_BkLi0LBKG.jpg" className="w-100"/>
                    </div>
                    <div className="col-md-6 text-center">
                        <h3>Articles on device for job-seekers </h3>
                        <p>We can help you perfecdt your resume like never before. But we can also help you shin e during your live interview-the second big step in the hiring process. Tips on presenting your self, projecdting the correct image, imporving your genreral interview skills.</p>
                    </div>
                    <div className="col-md-3">
                        <img src="https://ik.imagekit.io/lcq5etn9k/resume/placeholder_BkLi0LBKG.jpg" className="w-100"/>
                    </div>
                    <div className="col-md-12 border-bottom mb-3 mt-3"></div>
                </div>


                    <ul className="nav nav-pills mb-3 row border-bottom pb-3 " id="pills-tab1" role="tablist">
                        {categories.map((itm , index) => (
                        <li className="nav-item col-md-3  p-0" role="presentation">
                            <span onClick={() => handleTabClick(itm , index)} className={`nav-link  bg-white text-center ${index == active ? 'active' : ''}`} >{itm}</span>
                        </li>
                        ))
                        }
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="f1" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                {itemList.map((itm, index) => (
                                    (itm.category == categories[active] || categories[active] =='All') && <div className="col-md-4 mb-4">
                                        <h6>{itm.name}</h6>
                                        <div className="temp-box p-3" onMouseOver={() => setHover("temp"+index)} onMouseOut={() => setHover('')}>
                                            <img src={itm.img} className="w-100" style={{ "height" : "350px"}}/>
                                            <Link to={`/resume-maker/${itm.id}`}><div className={`middle ${hover == "temp"+index ? "active" : ""}`}>
                                                <span className={`btn btn-sm btn-success btn-round `} href="#">Use this Template</span>
                                            </div></Link>
                                        </div>
                                    </div>
                                ))  
                                }
                                
                            </div>
                        </div>
                        
                    </div>




                </div>

        </section>

    )
}

export default Index;