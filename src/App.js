import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import AuthentificationPage from "./components/AuthentificationPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signin",
    element: <AuthentificationPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
