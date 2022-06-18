import React from "react";
import "./menu.scss";

const Menu = () => {
  const menuItems = [
    { id: 1, title: "Overview", icon: <ion-icon name="apps"></ion-icon> },
    { id: 2, title: "Appointments", icon: <ion-icon name="apps"></ion-icon> },
  ];

  const footerItems = [
    { id: 1, title: "Support", icon: <ion-icon name="apps"></ion-icon> },
    { id: 2, title: "Logout", icon: <ion-icon name="apps"></ion-icon> },
  ];

  return (
    <>
      <ul className="navigation">
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.icon}
            <span>{item.title}</span>
          </li>
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
