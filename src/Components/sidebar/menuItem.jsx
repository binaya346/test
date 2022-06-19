import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./submenu";

const MenuItem = (props) => {
  const { menuItem } = props;

  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMenuSelection = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <React.Fragment>
      <li onClick={handleMenuSelection}>
        {menuItem.icon}
        {menuItem.subMenu ? (
          <span>{menuItem.title}</span>
        ) : (
          <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
        )}
      </li>
      {menuItem.subMenu ? (
        <ul className={`submenu ${showSubMenu ? "show" : ""}`}>
          {props.menuItem.subMenus.map((submenu) => (
            <SubMenu
              handleMenuSelection={handleMenuSelection}
              showSubMenu={showSubMenu}
              submenu={submenu}
              key={submenu.id}
            />
          ))}
        </ul>
      ) : null}
    </React.Fragment>
  );
};

export default MenuItem;
