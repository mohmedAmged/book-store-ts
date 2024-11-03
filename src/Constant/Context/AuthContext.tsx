import {jwtDecode} from "jwt-decode";
import Cookies from 'js-cookie';
import { createContext, useEffect, useState, ReactNode } from "react";

// Define the shape of the user data object based on your JWT payload
interface User {
  id: string;
  name: string;
  email: string;
  // Add other properties based on your JWT token payload
}

// Define the context type
interface AuthContextType {
  userData: User | null;
  saveUserData: () => void;
}

// Create the context with the specified type
export const AuthContext = createContext<AuthContextType | null>(null);

// Type the component props with ReactNode for children
interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [userData, setUserData] = useState<User | null>(null);

  // Function to decode the token and update user data
  const saveUserData = () => {
    const encodedToken = Cookies.get("token");
    if (encodedToken) {
      const decodedToken = jwtDecode<User>(encodedToken); // Use User type with jwtDecode
      setUserData(decodedToken);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
}