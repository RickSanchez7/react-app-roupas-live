import React from "react";
import "./custom-button.styles.scss";

const customButton = ({
  children,
  searchBarBtn,
  addToCartClass,
  isGoogleSignIn,
  ...otherprops
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      addToCartClass ? "addToCartClass" : ""
    } ${searchBarBtn ? "searchBar-btn" : ""} custom-btn`}
    {...otherprops}
  >
    {children}
  </button>
);

export default customButton;
