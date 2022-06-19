import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";
import MenuItem from "./menuItem";

const Menu = () => {
  const appointmentsSubMenuItems = [
    {
      id: 1,
      title: "Create Slots",
      url: "/create-slots",
    },
    {
      id: 2,
      title: "List Slots",
      url: "/list-slots",
    },
  ];

  const menuItems = [
    {
      id: 1,
      title: "Overview",
      icon: <ion-icon name="apps"></ion-icon>,
      subMenu: false,
      url: "/overview",
    },
    {
      id: 2,
      title: "Appointments",
      icon: <ion-icon name="apps"></ion-icon>,
      subMenu: true,
      subMenus: appointmentsSubMenuItems,
    },
  ];

  const footerItems = [
    {
      id: 1,
      title: "Support",
      icon: <ion-icon name="apps"></ion-icon>,
      subMenu: false,
      url: "/overview",
    },
    {
      id: 2,
      title: "Logout",
      icon: <ion-icon name="apps"></ion-icon>,
      subMenu: false,
      url: "/overview",
    },
  ];

  return (
    <>
      <ul className="navigation">
        {menuItems.map((item) => (
          <MenuItem menuItem={item} key={item.id} />
        ))}
      </ul>
      <ul className="footer">
        {footerItems.map((item) => (
          <li key={item.id}>
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
