import React from "react";
import loading from "../assets/Spinner.gif";
import "./loading.styles.scss";

const Loading = () => {
  return (
    <div className='loading'>
      <h2>loading...</h2>
      <img src={loading} alt='loading gif' />
    </div>
  );
};

export default Loading;
