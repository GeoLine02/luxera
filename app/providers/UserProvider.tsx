"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { User } from "../types/user";

interface UserContextType {
  user: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({
  children,
  userData,
}: {
  children: ReactNode;
  userData: { success: boolean; message?: string; data: User } | null;
}) {
  const [user, setUser] = useState<null | User>(
    userData?.data ? userData.data : null
  );
  console.log("user", user);
  // Update state when userData prop changes
  useEffect(() => {
    if (userData?.data) {
      setUser(userData.data);
    } else {
      setUser(null);
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a <UserProvider>");
  }
  return context;
};
