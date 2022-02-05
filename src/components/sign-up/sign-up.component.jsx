import React from 'react';

import './sign-up.style.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }
  render() {
    return <div className='sign-up'></div>;
  }
}

export default SignUp;
