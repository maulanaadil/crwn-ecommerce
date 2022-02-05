import React from 'react';

import './button.style.scss';

const Button = ({ children, isGoogleSign, ...otherProps }) => (
  <button
    className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
