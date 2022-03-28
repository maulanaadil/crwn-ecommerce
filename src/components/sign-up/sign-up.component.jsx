import { useState } from "react";
import styled from "styled-components";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

const Title = styled.h2`
  margin: 10px auto;
`;

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, Email has already in use");
      } else if (error.code === "auth/weak-password") {
        alert("Password at least 6 characters");
      } else {
        console.error(error.message);
      }
    }
  };

  return (
    <SignUpContainer>
      <Title>I do not have account</Title>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
