import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthNav.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function AuthNav() {
  return (
    <ul className={css.nav}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={buildLinkClass}>
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthNav;
