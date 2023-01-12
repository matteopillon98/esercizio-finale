import React, { createContext, useState } from "react";

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

  const login = (username: string, password: string) => {
    // TO DO
    // SALVARE NEL LOCAL STORAGE
    if (username === "admin" && password === "admin") {
      setIsLogged(true);
    } else {
      setmessage("Credenziali fornite errate, riprova");
    }
  };

  const logout = () => {
    // TO DO
    // ELIMINARE I DATI DAL LOCAL STORAGE
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
