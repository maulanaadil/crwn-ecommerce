import React from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import styled from "styled-components";

import CollectionItem from "../collection-item/collection-item.component.jsx";

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const CollectionPreview = ({ title, items, match, history, routeName }) => (
  <CollectionPreviewContainer>
    <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </Title>
    <Preview>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  match: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default withRouter(CollectionPreview);
