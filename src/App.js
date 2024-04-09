import "./App.css";
import Main from "./components/Main";
import SignInPage from "./components/SignInPage";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./laouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="sign-in" element={<SignInPage />} />
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
