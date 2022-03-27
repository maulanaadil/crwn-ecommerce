import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import styled from "styled-components";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../collection-preview/collection-preview.component.jsx";

const CollectionsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => (
  <CollectionsPreviewContainer>
    {collections.map(({ id, ...otherSectionProps }) => (
      <CollectionPreview key={id} {...otherSectionProps} />
    ))}
  </CollectionsPreviewContainer>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.object.isRequired,
};

const mapDispatchToProps = () =>
  createStructuredSelector({
    collections: selectCollectionsForPreview,
  });

export default connect(mapDispatchToProps)(CollectionsOverview);
