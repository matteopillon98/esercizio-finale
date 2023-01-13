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

function App() {
  const { isLogged } = useContext(UserContext);

  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <div id="app" className="app">
          <Routes>
            <Route path="/" element={<LoginForm />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/inventario" element={<Warehouse />}></Route>
          </Routes>
          <Footer />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
