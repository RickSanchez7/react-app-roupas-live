import React, { useState } from "react";

import FormInput from "./form-input.component";
import CustomButton from "./custom-button";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>Inicie Sessão</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Iniciar Sessão </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Iniciar Com Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
