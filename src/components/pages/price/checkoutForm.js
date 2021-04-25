import React , {useState, useEffect , useMemo} from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import API from "../../../API/index";
import { connect } from "react-redux";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { setLocalStorageItem , getLocalStorageItem } from "../../../utils/globals";
import { auth } from "../../../actions/user";

const useOptions = () => {
  // const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          // fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    })
  );

  return options;
};

function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [error , setError] = useState('');
  const [paymentSuccess , setPaymentSuccess] = useState(false);
  const [buttonDisabled , setButtonDisable] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonDisable(true);
    stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    }).then((res , err) => {
        if (res && res.paymentMethod) {
            try {
              API.post('Payment_Post',
                {
                  amount: props.planDetail.calculated_price,
                  currencyType: props.planDetail.currencyType,
                  id: res.paymentMethod.id,
                  planId : props.planDetail.id
                }, '',
                (result) => {
                  console.log(result)
                  handleServerResponse(result.data);
                }
              )
            } catch (error) {
              setError(error);
              setButtonDisable(false);
              console.log(error)
            }
            
          } else {
            setError(error)
            setButtonDisable(false);
            console.log(err);
          }
    });

    
  };

  const handleServerResponse = (response) => {
    if (response.error) {
      setError(response.message)
      setButtonDisable(false);
      // Show error from server on payment form
    } else if (response.requires_action) {
      // Use Stripe.js to handle the required card action
        stripe.handleCardAction(response.payment_intent_client_secret).then((res , err) => {

          if (err) {
            console.log(err);
            setButtonDisable(false);
            setError(err);
            // Show error from Stripe.js in payment form
          } else {
            
            try {
              API.post('Payment_Post',
                {
                  payment_intent_id : res.paymentIntent.id
                }, '',
                (result , err) => {
                  console.log(result , err)
                  handleServerResponse(result.data);
                }
              )
            } catch (error) {
              setError(error)
              setButtonDisable(false);
              console.log(error)
            }
          }
        });
  
    } else {
      console.log(response);
      setError(false);
      setButtonDisable(false);
      let userDetail = getLocalStorageItem('userDetail');
      userDetail.user['subscription'] = response.planDetail.subscription;
      setLocalStorageItem('userDetail' , userDetail );
      setLocalStorageItem('expires' , false)  
      setPaymentSuccess(response);
      props.auth()

      // alert("Payment Success" + JSON.stringify(response))
    }
  }
  if(paymentSuccess){
    return (
      <div className="col-6 shadow align-items-center mt-5 mb-5 pt-5">
        <h2 style={{color : 'green'}}>Your payment is successfull</h2>
        <span> Transaction ID : {paymentSuccess.intent.id}</span>
        <p>Now enjoy your subscription</p>
      </div>
    )
  }
  return (
    <div className="col-6 shadow align-items-center mt-5 mb-5 pt-5">

    <form onSubmit={handleSubmit}>
        <label>
          Card number
          </label>
          <div id="card-element" className="form-control form-control-payment">

            <CardNumberElement
              className="test"
              options={options}
              onReady={() => {
              }}
              onChange={event => {
              }}
              onBlur={() => {
              }}
              onFocus={() => {
              }}
            />
          </div>
        <label>
          Expiration date
          </label>
          <div id="card-element" className="form-control form-control-payment">

            <CardExpiryElement
              options={options}
              onReady={() => {
              }}
              onChange={event => {
              }}
              onBlur={() => {
              }}
              onFocus={() => {
              }}
            />
        </div>
        <label>
          CVC
        </label>
        <div id="card-element" className="form-control form-control-payment">

          <CardCvcElement
            options={options}
            onReady={() => {
            }}
            onChange={event => {
            }}
            onBlur={() => {
            }}
            onFocus={() => {
            }}
          />
        </div>
        <label></label>
        <div id="card-element" className="col-md-12 form-control-payment">

          <button style={{"padding" : "9px"}} className={`form-control btn btn-primary ${buttonDisabled ? 'btnDisabled' : " "}`} type="submit" disabled={buttonDisabled || !stripe}>
            Pay {props.planDetail.currencyType} {props.planDetail.calculated_price}
          </button>
          {error && <span class="error">{error}</span>}
        </div>
    </form>
    </div>
    
  );
};

const mapStateToProps = ( state ) => ( {
  userDetail: state.user.userDetail
} );

const mapDispatchToProps = {
  auth,
};

export default connect( mapStateToProps, mapDispatchToProps )( CheckoutForm );
