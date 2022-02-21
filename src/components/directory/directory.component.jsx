import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';
import MenuItem from '../menu-items/menu-items.component.jsx';

const DirectoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapDispatchToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapDispatchToProps)(Directory);
