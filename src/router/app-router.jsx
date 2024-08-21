import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child) => (
                <Route
                  key={child.id}
                  path={child.path}
                  element={child.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
