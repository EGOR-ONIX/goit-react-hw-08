import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "../../hook/useAuth.js";

import { refreshUser } from "../../redux/auth/operations.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

import Layout from "../Layout/Layout.jsx";
import { RestrictedRoute } from "../RestrictedRoute.jsx";
import { PrivateRoute } from "../PrivateRoute.jsx";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing)
    return <p className={css.refresh}>User is refreshing, please wait...</p>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
