import React from "react";

const MenuItems = props => {
  return (
    <ul className="list">
      <li className="header">MAIN NAVIGATION</li>
      {props.children}
    </ul>
  );
};

export default MenuItems;
