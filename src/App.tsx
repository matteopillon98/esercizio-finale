import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import LoginForm from "./forms/LoginForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { UserProvider, UserContext } from "./utils/UserProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Warehouse from "./pages/Warehouse";
import Animals from "./pages/Animals";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { isLogged } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />
      <div id="app" className="app">
        <Routes>
          <Route path="/" element={isLogged ? <Home /> : <LoginForm />}></Route>
          <Route
            path="/gestione-animali"
            element={isLogged ? <Animals /> : <LoginForm />}
          ></Route>
          <Route
            path="/inventario"
            element={isLogged ? <Warehouse /> : <LoginForm />}
          ></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
