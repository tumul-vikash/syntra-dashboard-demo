import { createBrowserRouter } from "react-router-dom";

import MainFlow from "./MainFlow";

export const Navigation = createBrowserRouter([MainFlow], {
  basename: "/syntra-dashboard-demo",
});

export default Navigation;
