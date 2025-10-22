import { createBrowserRouter } from "react-router-dom";
import App from "@react/App";
import Index from "@react/pages";
import FeaturesPage from "@react/pages/Features";
import PricingPage from "@react/pages/Pricing";
import AboutPage from "@react/pages/About";

// Root route renders the landing page (App). Other routes are simple placeholders for now.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div className="p-6">Something went wrong.</div>,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "features",
        element: <FeaturesPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
