import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFething } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFething,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
