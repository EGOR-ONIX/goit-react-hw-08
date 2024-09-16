import { useAuth } from "../../hook/useAuth";

import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>
    </header>
  );
}

export default AppBar;
