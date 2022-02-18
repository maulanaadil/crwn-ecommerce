import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KUAsHJ2C1L9eO1Ji32cSfNAvtHG4mKtTzh2CZsvYBfnRGwtJzo6oCNDPV5iZIZjwADB4JS9BRyGXvALpdnpKAfB00RA8Wrlda';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successfull');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Co.'
      billingAddress
      shippingAddress
      image='https://cdn.discordapp.com/attachments/723414734791245868/944178017004052490/crown.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
