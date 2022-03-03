import React from 'react';
import styled from 'styled-components';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  gap: 100px;
  justify-content: space-between;
  margin: 30px auto;
`;

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
