import React from 'react';

import './button.style.scss';

const Button = ({ children, isGoogleSign, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSign ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
