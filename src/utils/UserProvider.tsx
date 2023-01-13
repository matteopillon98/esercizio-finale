import React, { createContext, useEffect, useState } from "react";

interface UserContextProps {
  login: (username: string, password: string) => void;
  logout: () => void;
  isLogged: boolean;
  message: string;
}

const UserContext = createContext<UserContextProps>({
  login: () => {},
  logout: () => {},
  isLogged: false,
  message: "",
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [message, setmessage] = useState("");

  useEffect(() => {
    localStorage.getItem("username") ? setIsLogged(true) : setIsLogged(false);
  }, []);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      setIsLogged(true);
    } else {
      setmessage("Credenziali fornite errate, riprova");
    }
  };

  const logout = () => {
    localStorage.removeItem("username");
    setIsLogged(false);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        isLogged,
        message,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
