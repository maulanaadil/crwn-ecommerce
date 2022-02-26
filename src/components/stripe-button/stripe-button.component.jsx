import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Button from '../button/button.component';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KUAsHJ2C1L9eO1Ji32cSfNAvtHG4mKtTzh2CZsvYBfnRGwtJzo6oCNDPV5iZIZjwADB4JS9BRyGXvALpdnpKAfB00RA8Wrlda';

  const onToken = (token) => {
    alert('Payment successfull');
  };

  const onSubmit = (event) => {
    if (!price) {
      alert('Tidak ada checkout');
      return event.stopPropagation();
    }
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Co.'
      billingAddress
      shippingAddress
      image='https://cdn.discordapp.com/attachments/723414734791245868/944178017004052490/crown.png'
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
      <Button enabled={price} onClick={onSubmit}>
        Your total ${price}
      </Button>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
