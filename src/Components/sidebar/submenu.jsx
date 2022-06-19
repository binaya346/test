import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = (props) => {
  const { submenu, handleMenuSelection } = props;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === submenu.url) {
      handleMenuSelection();
    }
  }, []);

  return (
    <li key={submenu.id}>
      <NavLink to={submenu.url}>{submenu.title}</NavLink>
    </li>
  );
};

export default SubMenu;
