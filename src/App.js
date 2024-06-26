import "./App.css";
import Main from "./components/Main";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import ServicesLayout from "./layouts/ServicesLayout";
import FlightsPage from "./components/servicesPages/FlightsPage";
import StaysPage from "./components/servicesPages/StaysPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="services" element={<ServicesLayout />}>
        <Route path="Flights" element={<FlightsPage />} />
        <Route path="Stays" element={<StaysPage />} />
      </Route>
      <Route
        path="*"
        element={
          <div>
            <h2>Sorry, the page doesn't exists!</h2>
          </div>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
