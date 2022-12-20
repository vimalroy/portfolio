import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, NavLink } from 'react-router-dom';
import MenuLists from "./MenuList"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
        {MenuLists.map( menu => {
            return (
                <li className="menu-item" key={menu.name}>
                    <NavLink to={menu.link}>{menu.name}</NavLink>
                </li>
            );
        })}
    </Menu>
  );
};
