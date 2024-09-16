import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";

import css from "./Layout.module.css";

function Layout() {
  return (
    <>
      <AppBar />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
