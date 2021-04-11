import React , { useEffect, useState , Fragment } from 'react';
import { getPlans } from "../../../actions/price";
import { connect } from "react-redux";
import axios from 'axios';
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
            <span>loading</span>
        )
    }
    return(
            <div>

                <span style={{"margin-left": "41%"}}>
                    {plans && plans.map((item, index) => { return (
                        <div>
                        <b>{item.name}</b><br></br>
                        Price : {item.currencyType} {item.calculated_price}<br></br>
                        Validity : {item.validity} months <br></br>
                        Feature : { item.features.length && item.features.map((itm) => {return (
                            <li>{itm}</li>
                        )})}<br></br>
                        <a href={`/payment?id=${item.id}`}><input type="button" value="Upgrade now"/></a>
                        <br></br><br></br>
                        </div>
                    )})}
                </span>
            </div>
            
        
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
