import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { GetPlanById } from "../../../actions/price";
import { connect } from "react-redux";

import { CheckoutForm } from "./checkoutForm";

const PUBLIC_KEY = "pk_test_51Ibt0LSAR6N0ZYR9TZFOOmIPz1IvJUNTeI6n9DsEHwVFUUINA3ekP0B7jdAMAlnBjK6UWblTMK2mL50Hkdb9c3Ns00BY6bIvJM";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = (props) => {
  console.log(props)
  const [planId , setPlanId] = useState(false);  
  const [planDetail , setPlanDetail] = useState(false);  
  
  useEffect(() => {
      if(props.location.search.split('=')[1]){
        setPlanId(props.location.search.split('=')[1]);    
      } else {
        if(typeof window !== 'undefined'){
            window.location.href='/'
        }
      }
  } , [])

  useEffect(() => {
    props.GetPlanById(planId ? planId : props.location.search.split('=')[1] , localStorage.getItem('currencyType'));
  }, [props.GetPlanById])
  


  useEffect(() => {
    setPlanDetail(props.planDetail)
  }, [props.planDetail])

  console.log(planId)
  if(props.loading){
      return (
          "loading"
      )
  }
  return (
    <Elements stripe={stripeTestPromise} >
      <CheckoutForm planDetail = {planDetail} />
    </Elements>
  );
};

const mapStateToProps = ( state ) => ( {
    planDetail: state.price.planDetail,
    loading : state.price.plan_detail_loading
} );

const mapDispatchToProps = {
    GetPlanById
};

export default connect( mapStateToProps, mapDispatchToProps )( Stripe );
