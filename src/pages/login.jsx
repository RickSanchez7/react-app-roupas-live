import React from "react";
import { Redirect } from "react-router-dom";

import SignIn from "../components/sign-in.component";
import SignUp from "../components/sign-up.component";

import "./login.styles.scss";

const Login = ({ currentUser }) => {
  if (currentUser) return <Redirect to='/products' />;
  return (
    <div className='SignIn-SignUp'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
