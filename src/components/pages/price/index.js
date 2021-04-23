import React , { useEffect, useState , Fragment } from 'react';
import { getPlans } from "../../../actions/price";
import { connect } from "react-redux";
import axios from 'axios';
import Shimmer from "../../widgets/shimmerEffect";
import stripe from "../../../scss/images/stripe.svg";
import payment from "../../../scss/images/payment.svg";
import { Link } from 'react-router-dom';

function Price(props) {
    const [plans , setPlanList] = useState([]);
    useEffect(() => {
        if(typeof window !== 'undefined'){
            if(!localStorage.getItem('currencyType')){
                    axios.get('https://ipapi.co/currency').then((res)=>{
                    localStorage.setItem('currencyType' , res.data);
                    props.getPlans(res.data);
                })
            } else {
                props.getPlans(localStorage.getItem('currencyType'));
            }
            
        }
    }, [props.getPlans])

    useEffect(() => {
        
        
    }, [])

    useEffect(() => {
        setPlanList(props.planDetail)
    }, [props.planDetail])
    console.log(props);
    if(props.loading){
        return(
            <Shimmer />
        )
    }
    return(
        <section className="align-items-center mt-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5 ">
                        <h3 className="home-title">Simple and transparent pricing</h3>
                        <p>You’ll gain instant access to our Premium features, which will give you an edge.</p>
                    </div>
                </div>
                <div className="row mt-4 mb-5">
                {plans && plans.map((item, index) => { return ( 
                    <div className="col-md-3">
                        <div className="w-100 bg-white shadow text-center  p-4">
                            <img src={item.imgUrl} className="mb-3"/>
                            <label className="text-center d-block f-20 mb-4">{item.currencyType} {item.calculated_price}</label>
                            <label className="text-center d-block  mb-4">{item.name}</label>
                            {
                                item.calculated_price > 0 && <>
                                    <label class="text-center d-block  mb-4">{item.validity} Month</label>
                                    <Link to={`/payment?id=${item.id}`} class="btn btn-warning mb-3"> Upgrade now</Link>
                                    </>
                            }
                            <label class="text-center d-block mb-1 text-primary">You will save {item.calculated_price - (item.discount * item.calculated_price /100)}</label>

                            {item.calculated_price == 0 && localStorage.getItem("expires") == true && <button className="btn btn-muted mb-5"> Your Current Plan</button>}
                        </div>
                    </div>
                    
                )})}
                    
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 text-left">
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                    </div>
                    <div className="col-md-4 text-center">
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                    </div>
                    <div className="col-md-4 text-center">
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                        <label><span className="mdi mdi-check-circle text-warning mr-1"></span>You’ll gain instant access to</label>
                    </div>
        
                </div>
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <img src={payment}/>
                        <label className="d-block">We accept all major payment methods and process payments with Strip SSL.<br/>Secure / 256-bit SSL secure checkout</label>
                        <img src={stripe}/>
                    </div>
        
                </div>
        
            </div>
        </section>
    
            // <div>

            //     <span style={{"margin-left": "41%"}}>
            //         {plans && plans.map((item, index) => { return (
            //             <div>
            //             <b>{item.name}</b><br></br>
            //             Price : {item.currencyType} {item.calculated_price}<br></br>
            //             Validity : {item.validity} months <br></br>
            //             Feature : { item.features.length && item.features.map((itm) => {return (
            //                 <li>{itm}</li>
            //             )})}<br></br>
            //             <a href={`/payment?id=${item.id}`}><input type="button" value="Upgrade now"/></a>
            //             <br></br><br></br>
            //             </div>
            //         )})}
            //     </span>
            // </div>
            
        
    )
}


const mapStateToProps = ( state ) => ( {
    planDetail: state.price.plans,
    loading : state.price.plan_detail_loading
} );

const mapDispatchToProps = {
    getPlans
};

export default connect( mapStateToProps, mapDispatchToProps )( Price );
