import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeButton = (props) => {

    const priceForStripe = props.price * 100;
    const publishableKey = 'pk_test_7tjkKEDPsVqmgFvTWOg313bQ00zvM667Bp';

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    }


    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image=""
            description={`Your total is $${props.price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;