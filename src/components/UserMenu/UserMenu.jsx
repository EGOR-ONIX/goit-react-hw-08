import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import { useAuth } from "../../hook/useAuth.js";

import { logout } from "../../redux/auth/operations.js";

import css from "./UserMenu.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={css.nav}>
        <ul className={css["nav-list"]}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
          </li>
        </ul>

        <p className={css.information}>Welcome, {user.name}!</p>

        <button className={css.btn} type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </>
  );
}

export default UserMenu;
