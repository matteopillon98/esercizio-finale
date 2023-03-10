import { createContext, useEffect, useState, useContext } from "react";

interface UserContextProps {
  login: (username: string, password: string) => void;
  logout: () => void;
  isLogged: boolean;
  message: string;
  setMessage: (msg: string) => void;
}

export { useUser, UserProvider };

const UserContext = createContext<UserContextProps>({
  login: () => {},
  logout: () => {},
  isLogged: false,
  message: "",
  setMessage: () => {},
});

const useUser = () => { return useContext(UserContext)};


interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.getItem("username") ? setIsLogged(true) : setIsLogged(false);
  }, []);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      setIsLogged(true);
      setMessage("Autenticazione avvenuta con successo");
    } else {
      setMessage("Credenziali fornite errate, riprova");
    }
  };

  const logout = () => {
    localStorage.removeItem("username");
    setMessage("Devi prima fare l'accesso per utilizzare i nostri servizi");
    setIsLogged(false);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        isLogged,
        message,
        setMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
