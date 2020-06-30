import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-Item.styles.scss";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div
      className='menu-item'
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Colecção</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
