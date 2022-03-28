import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

ShopPage.propTypes = {
  fetchCollectionsStart: PropTypes.any,
  match: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
