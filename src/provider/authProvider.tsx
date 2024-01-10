import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import React, { ReactNode } from 'react';

export interface AuthContextInterface {
  token: string | null;
  setToken: (newToken: string | null) => void;
}

const AuthContext = createContext<AuthContextInterface>({
  token: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToken: () => {},
});

const AuthProvider: React.FC<{children: ReactNode}> = ({ children })  => {
  // State to hold the authentication token
  const [token, setToken_] = useState<string | null>(localStorage.getItem("token"));

  // Function to set the authentication token
  const setToken = (newToken: string | null) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo<AuthContextInterface>(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextInterface => {
  return useContext(AuthContext);
};

export default AuthProvider;