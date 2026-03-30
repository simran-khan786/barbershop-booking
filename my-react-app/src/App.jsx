import { useEffect, useMemo, useState } from "react";

import LandingPage from "./components/pages/LandingPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import ResetPasswordPage from "./components/pages/ResetPasswordPage.jsx";
import OwnerDashboard from "./components/pages/OwnerDashboard.jsx";
import OwnerRegisterPage from "./components/pages/OwnerRegisterPage_clean";
import BookingPage from "./components/pages/BookingPage.jsx";
 

import { Toaster } from "react-hot-toast";

const ROUTES = {
  landing: "landing",
  login: "login",
  register: "register",
  home: "home",
  resetPassword: "resetPassword",
  owner: "owner",
  ownerRegister: "owner-register",
  booking: "booking",
};

function App() {
  const [route, setRoute] = useState(ROUTES.landing);
  const [selectedSalon, setSelectedSalon] = useState(null);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);

    const path = window.location.pathname;

    if (path === "/reset-password") {
      setRoute(ROUTES.resetPassword);
    }
  }, [theme]);

  const handleNavigate = (next) => {
    if (Object.values(ROUTES).includes(next)) {
      setRoute(next);

      if (next === ROUTES.resetPassword) {
        window.history.pushState({}, "", "/reset-password");
      } else {
        window.history.pushState({}, "", "/");
      }
    }
  };

  const content = useMemo(() => {
    switch (route) {
      case ROUTES.login:
        return (
          <LoginPage
            onNavigate={handleNavigate}
            theme={theme}
            setTheme={setTheme}
          />
        );

      case ROUTES.register:
        return (
          <RegisterPage
            onNavigate={handleNavigate}
            theme={theme}
            setTheme={setTheme}
          />
        );

      case ROUTES.home:
        return (
          <HomePage
  onNavigate={handleNavigate}
  setSelectedSalon={setSelectedSalon}   // ✅ ADD
  theme={theme}
  setTheme={setTheme}
/>
        );
      case ROUTES.resetPassword:
        return <ResetPasswordPage />;

      case ROUTES.owner:
        return (
          <OwnerDashboard
            onNavigate={handleNavigate}
            theme={theme}
            setTheme={setTheme}
          />
        );

      case ROUTES.ownerRegister:
        return (
          <OwnerRegisterPage
            onNavigate={handleNavigate}
            theme={theme}
            setTheme={setTheme}
          />
        );
        case ROUTES.booking:
  return (
    <BookingPage
      salon={selectedSalon}   // ✅ pass data
      onNavigate={handleNavigate}
    />
  );

      default:
        return (
          <LandingPage
            onNavigate={handleNavigate}
            theme={theme}
            setTheme={setTheme}
          />
        );
    }
  }, [route, theme]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)]">

      <Toaster />

      {content}
    </div>
  );
}

export default App;