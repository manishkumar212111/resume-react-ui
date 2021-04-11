import React , {useState, useEffect , useMemo} from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import API from "../../../API/index"
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

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

export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [error , setError] = useState('');
  const [paymentSuccess , setPaymentSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
                  
                  handleServerResponse(result.data);
                }
              )
            } catch (error) {
              setError(error)
              console.log(error)
            }
            
          } else {
            setError(error)
            console.log(err);
          }
    });

    
  };

  const handleServerResponse = (response) => {
    if (response.error) {
      setError(error.message)
      // Show error from server on payment form
    } else if (response.requires_action) {
      // Use Stripe.js to handle the required card action
        stripe.handleCardAction(response.payment_intent_client_secret).then((res , err) => {

          if (err) {
            console.log(err);
            setError(err);
            // Show error from Stripe.js in payment form
          } else {
            
            try {
              API.post('Payment_Post',
                {
                  payment_intent_id : res.paymentIntent.id
                }, '',
                (result) => {
                  handleServerResponse(result.data);
                }
              )
            } catch (error) {
              setError(error)
              console.log(error)
            }
          }
        });
  
    } else {
      console.log(response);
      setError(false)
      setPaymentSuccess(response);
      // alert("Payment Success" + JSON.stringify(response))
    }
  }
  if(paymentSuccess){
    return (
      <div>
        <b>Payment Successfull</b><br></br>
        Transaction Detail <br></br>
        <span> ID : {paymentSuccess.intent.id}</span><br></br>
        <span> Amount : {paymentSuccess.intent.currency} {paymentSuccess.intent.amount/100}</span>
        <br></br>
        Subscription Detail <br></br>
        <span> Name : {paymentSuccess.planDetail.subscription.name}</span><br></br>
        <span> Validity : {paymentSuccess.planDetail.subscription.validity} Months</span><br></br>
        <span> Expires : {paymentSuccess.planDetail.subscription.expires}</span><br></br>
        <br></br>
        
      </div>
    )
  }
  console.log(props)
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <span>{error}</span>}
    </form>
    // <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
    //   <CardElement options={CARD_ELEMENT_OPTIONS} />
    //   <button>Pay</button>
    // </form>
  );
};