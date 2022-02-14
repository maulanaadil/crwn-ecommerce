import React from 'react';
import { withRouter } from 'react-router-dom';

import './404.style.scss';

import Button from '../../components/button/button.component';

const NotFound = ({ history }) => (
  <div className='not-found'>
    <h1>404</h1>
    <h3>Not Found</h3>
    <Button type='button' onClick={() => history.push('/')}>
      Go To Homepage
    </Button>
  </div>
);

export default withRouter(NotFound);
