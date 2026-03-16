import { useEffect, useMemo, useState } from "react";
import LandingPage from "./components/pages/LandingPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";

const ROUTES = {
  landing: "landing",
  login: "login",
  register: "register",
};

function App() {
  const [route, setRoute] = useState(ROUTES.landing);
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleNavigate = (next) => {
    if (ROUTES[next]) setRoute(next);
  };

  const content = useMemo(() => {
    switch (route) {
      case ROUTES.login:
        return <LoginPage onNavigate={handleNavigate} />;
      case ROUTES.register:
        return <RegisterPage onNavigate={handleNavigate} />;
      case ROUTES.landing:
      default:
        return (
          <LandingPage
            onNavigate={handleNavigate}
            theme={theme}
            onToggleTheme={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
          />
        );
    }
  }, [route, theme]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)]">
      {content}
    </div>
  );
}

export default App;
