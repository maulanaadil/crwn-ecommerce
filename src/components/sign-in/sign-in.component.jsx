import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <ButtonContainer>
            <Button type='submit'>Sign in</Button>
            <Button type='button' onClick={googleSignInStart} isGoogleSign>
              with Google
            </Button>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
