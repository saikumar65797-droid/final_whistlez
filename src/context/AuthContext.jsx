import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const DEFAULT_USER_KEY = 'whistlez_user';
const USERS_STORAGE_KEY = 'whistlez_users';
const DEFAULT_ADMIN_EMAIL = 'admin123@gmail.com';
const DEFAULT_ADMIN_PASSWORD = 'Admin123@';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const storedUser = window.localStorage.getItem(DEFAULT_USER_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });
  const [isAuthLoaded, setIsAuthLoaded] = useState(true);

  const getStoredUsers = () => {
    try {
      return JSON.parse(window.localStorage.getItem(USERS_STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  };

  const saveUsers = (users) => {
    window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  useEffect(() => {
    if (!user) {
      const storedUser = window.localStorage.getItem(DEFAULT_USER_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setIsAuthLoaded(true);
  }, []);

  const login = (email, password) => {
    const users = getStoredUsers();

    if (users[email] && users[email].password === password) {
      const userData = { email };
      window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(userData));
      setUser(userData);
      return true;
    }

    if (email === DEFAULT_ADMIN_EMAIL && password === DEFAULT_ADMIN_PASSWORD) {
      const userData = { email };
      window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(userData));
      setUser(userData);
      return true;
    }

    return false;
  };

  const register = (email, password) => {
    const users = getStoredUsers();
    const normalizedEmail = email.trim().toLowerCase();

    if (users[normalizedEmail] || normalizedEmail === DEFAULT_ADMIN_EMAIL) {
      return false;
    }

    users[normalizedEmail] = { password };
    saveUsers(users);

    const userData = { email: normalizedEmail };
    window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const logout = () => {
    window.localStorage.removeItem(DEFAULT_USER_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: Boolean(user), isAuthLoaded, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
