import Header from "@react/components/nav/header";
import Footer from "@react/components/nav/footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Scroll to top on route change (immediate)
function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ScrollToTopOnRouteChange />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
