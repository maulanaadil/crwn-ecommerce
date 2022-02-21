import React from 'react';
import styled, { css } from 'styled-components';

const CartItemContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-bottom: 14px;
`;

const ImageItem = styled.img`
  width: 30%;
`;

const ItemDetailWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const cartItemTextStyle = css`
  font-size: 16px;
`;

const CartItemName = styled.span`
  ${cartItemTextStyle}
`;

const CartItemPrice = styled.span`
  ${cartItemTextStyle}
`;

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageItem src={imageUrl} alt={`item-${name}`} />
    <ItemDetailWrapper>
      <CartItemName>{name}</CartItemName>
      <CartItemPrice>
        {quantity} x ${price}
      </CartItemPrice>
    </ItemDetailWrapper>
  </CartItemContainer>
);

export default CartItem;
