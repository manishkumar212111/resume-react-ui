import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { GetPlanById } from "../../../actions/price";
import { connect } from "react-redux";

import  CheckoutForm  from "./checkoutForm";
import  Shimmer  from "../../widgets/shimmerEffect";
import { getLocalStorageItem, setLocalStorageItem } from "../../../utils/globals";
import Auth from "../../pages/Auth";

const PUBLIC_KEY = "pk_test_51Ibt0LSAR6N0ZYR9TZFOOmIPz1IvJUNTeI6n9DsEHwVFUUINA3ekP0B7jdAMAlnBjK6UWblTMK2mL50Hkdb9c3Ns00BY6bIvJM";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = (props) => {
  const [planId , setPlanId] = useState(false);  
  const [planDetail , setPlanDetail] = useState(false);  
  const [showLogin , setShowLogin] = useState(false);
  useEffect(() => {
      if(!getLocalStorageItem('userDetail').user){ 
        window.login_redirect = window.location.href ? window.location.href : "lkjkjhjhj";
        setShowLogin(true);
        return;
      }
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

  if(props.loading){
      return (
          <Shimmer />
      )
  }
  return (
    <section className="container align-items-center mt-5 pt-5">
        <div className="row">

          <Elements stripe={stripeTestPromise} >
            <CheckoutForm planDetail = {planDetail} />
          </Elements>
        </div>
        { showLogin && <Auth showLogin={true} />}
    </section>
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
