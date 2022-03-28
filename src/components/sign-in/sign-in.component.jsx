import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonContainer>
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSign>
            with Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

SignIn.propTypes = {
  emailSignInStart: PropTypes.any,
  googleSignInStart: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
