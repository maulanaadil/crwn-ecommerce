import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;

  &:last-child {
    width: 8%;
  }
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
`;

const Total = styled.span`
  padding-bottom: 20px;
`;

const TextWarning = styled.div`
  color: red;
  text-align: center;
  margin: 40px auto;
  font-size: 24px;
`;

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalWrapper>
      <Total>TOTAL: ${total}</Total>
      <StripeCheckoutButton price={total} />
    </TotalWrapper>
    <TextWarning>
      *Please us the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 05/22 - CVV: 123
    </TextWarning>
  </CheckoutPageContainer>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.objectOf(PropTypes.object),
  total: PropTypes.number.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
  });

export default connect(mapStateToProps)(CheckoutPage);
