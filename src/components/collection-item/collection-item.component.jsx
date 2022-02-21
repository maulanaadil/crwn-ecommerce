import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import Button from '../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';

const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${(props) => props.imageUrl});
`;

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${BackgroundImage} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const TextFooterStyle = css`
  width: 90%;
  margin-bottom: 15px;
`;

const TextName = styled.span`
  ${TextFooterStyle}
`;

const TextPrice = styled.span`
  ${TextFooterStyle}
  text-align: end;
`;

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <TextName>{name}</TextName>
        <TextPrice>${price}</TextPrice>
      </CollectionFooterContainer>
      <Button inverted onClick={() => addItem(item)}>
        Add to Cart
      </Button>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
