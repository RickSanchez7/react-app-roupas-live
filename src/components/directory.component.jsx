import React, { useState, useEffect } from "react";
import MenuItem from "./menu-Item.component";

import "./directory.styles.scss";

import { sections } from "./sections";

const Directory = () => {
  const [section, setSection] = useState([]);

  useEffect(() => {
    setSection(sections);
    return () => {};
  }, []);

  return (
    <div className='directory'>
      {section.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
