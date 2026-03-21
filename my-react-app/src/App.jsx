import { useEffect, useMemo, useState } from "react";

import LandingPage from "./components/pages/LandingPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import ResetPasswordPage from "./components/pages/ResetPasswordPage.jsx";
import OwnerDashboard from "./components/pages/OwnerDashboard.jsx";
import OwnerRegisterPage from "./components/pages/OwnerRegisterPage.jsx";

import { Toaster } from "react-hot-toast"; // ✅ IMPORT

// ROUTES
const ROUTES = {
  landing: "landing",
  login: "login",
  register: "register",
  home: "home",
  resetPassword: "resetPassword",
  owner: "owner",
  ownerRegister: "owner-register",
};

function App() {
  const [route, setRoute] = useState(ROUTES.landing);

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";

    const path = window.location.pathname;

    if (path === "/reset-password") {
      setRoute(ROUTES.resetPassword);
    }
  }, []);

  const handleNavigate = (next) => {
    console.log("NAVIGATE TO:", next);

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
        return <LoginPage onNavigate={handleNavigate} />;

      case ROUTES.register:
        return <RegisterPage onNavigate={handleNavigate} />;

      case ROUTES.home:
        return <HomePage onNavigate={handleNavigate} />;

      case ROUTES.resetPassword:
        return <ResetPasswordPage />;

      case ROUTES.owner:
        return <OwnerDashboard onNavigate={handleNavigate} />;

      case ROUTES.ownerRegister:
        return <OwnerRegisterPage onNavigate={handleNavigate} />;

      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* ✅ GLOBAL TOASTER (IMPORTANT) */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#1c1d22",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "14px",
          },
        }}
      />

      {content}
    </div>
  );
}

export default App;