import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';
import MenuItem from '../menu-items/menu-items.component.jsx';

import './directory.style.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapDispatchToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapDispatchToProps)(Directory);
