import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

import './collections-overview.style.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-previews'>
    {collections.map(({ id, ...otherSectionProps }) => (
      <CollectionPreview key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapDispatchToProps = () =>
  createStructuredSelector({
    collections: selectCollectionsForPreview,
  });

export default connect(mapDispatchToProps)(CollectionsOverview);
