import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = props => {
  return (
    <li>
      <NavLink exact={props.exact} to={props.href} onClick={props.onclick}>
        <i className="material-icons">{props.icon}</i>
        <span>{props.label}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
