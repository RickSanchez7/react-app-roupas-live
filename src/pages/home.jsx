import React from "react";
import Directory from "../components/directory.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <>
      <div className='hero'>
        <div className='banner'>
          <h1>Bem-vindo</h1>
        </div>
      </div>
      <Directory />
    </>
  );
};

export default Home;
