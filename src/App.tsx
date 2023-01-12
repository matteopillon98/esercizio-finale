import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import LoginForm from "./forms/LoginForm";
import { UserProvider } from "./utils/UserProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <div className="App">
        <LoginForm />
      </div>
    </UserProvider>
  );
}

export default App;
