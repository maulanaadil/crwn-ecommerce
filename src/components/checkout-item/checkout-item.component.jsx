import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

const CheckoutItemContainer = styled.div`
  width: 100%;
  min-width: 100px;
  display: flex;
  border-bottom: 1px solid darkGray;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const Image = styled.img.attrs({
  src: (props) => props.imageUrl,
  alt: (props) => `item ${props.name}`,
})`
  width: 100%;
  height: 100%;
`;

const textStyle = css`
  width: 23%;
`;

const TextName = styled.span`
  ${textStyle}
`;
const QuantityContainer = styled.span`
  ${textStyle}
  display: flex;
`;
const TextQuantity = styled.span`
  margin: 0 20px;
`;

const TextPrice = styled.span`
  ${textStyle}
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const RemoveButton = styled.div`
  cursor: pointer;
`;

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <TextName>{name}</TextName>
      <QuantityContainer>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <TextQuantity>{quantity}</TextQuantity>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>
      <TextPrice>${price}</TextPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
