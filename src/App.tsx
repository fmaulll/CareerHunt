import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import { NonProtectedRoute, ProtectedRoute } from "./middleware/auth";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import { AuthRoutes, NonAuthRoutes } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {NonAuthRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<NonProtectedRoute>{route.component}</NonProtectedRoute>}
            />
          ))}
          {AuthRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<ProtectedRoute>{route.component}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
