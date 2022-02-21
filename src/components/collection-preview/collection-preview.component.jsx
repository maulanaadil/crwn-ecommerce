import React from 'react';
import styled from 'styled-components';

import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title}</Title>
    <Preview>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
