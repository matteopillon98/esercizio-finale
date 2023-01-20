import { useContext } from "react";
import "./styles/App.css";
import LoginForm from "./forms/LoginForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useUser } from "./utils/UserProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Warehouse from "./pages/Warehouse";
import Animals from "./pages/Animals";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  const { isLogged } = useUser();

  return (
    <>
      <Navbar />
      <div id="app" className="app">
          {isLogged ? <ItemsLogged/> : <ItemsNotLogged/>}
        <Footer />
      </div>
    </>
  );
}

function ItemsLogged () {
  return(
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/gestione-animali" element={<Animals />}></Route>
    <Route path="/inventario" element={<Warehouse />}></Route>
    <Route path="/*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

function ItemsNotLogged(){
  return(
    <Routes>
    <Route path="*" element={<LoginForm />}></Route>
    </Routes>
  );
}
