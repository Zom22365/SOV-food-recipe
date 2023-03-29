import { useRoutes } from "react-router-dom";
import Home from "src/pages/site/Home";
import Treding from "src/pages/site/Trending";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: "/",
                element: <Home />
            },
            { path: "/login" },
            { path: "/register" },
            { path: "/forgot-password" },
            {
                path: "/home",
                element: <Home />
            },
            { path: "/category/:id" },
            {
                path: "/trending",
                element: <Treding />
            },
            { path: "/search/:keyword" },
            { path: "/detail/:id" },
            { path: "/profile" },
            { path: "/auth/dashboard" }

        ]
    );
    return routes;
}

export default Router;