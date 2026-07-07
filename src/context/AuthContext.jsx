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
  const [userRole, setUserRole] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const storedRole = window.localStorage.getItem('whistlez_user_role');
      return storedRole || null;
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
    const normalizedEmail = email.trim().toLowerCase();

    // Check if it's a registered admin
    if (users[normalizedEmail] && users[normalizedEmail].password === password) {
      const userData = { email: normalizedEmail };
      window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(userData));
      window.localStorage.setItem('whistlez_user_role', 'admin');
      setUser(userData);
      setUserRole('admin');
      return true;
    }

    // Check if it's the superadmin
    if (normalizedEmail === DEFAULT_ADMIN_EMAIL && password === DEFAULT_ADMIN_PASSWORD) {
      const userData = { email: normalizedEmail };
      window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(userData));
      window.localStorage.setItem('whistlez_user_role', 'superadmin');
      setUser(userData);
      setUserRole('superadmin');
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
    window.localStorage.setItem('whistlez_user_role', 'admin');
    window.localStorage.setItem('whistlez_admin_onboarded', 'false');
    setUser(userData);
    setUserRole('admin');
    return true;
  };

  const logout = () => {
    window.localStorage.removeItem(DEFAULT_USER_KEY);
    window.localStorage.removeItem('whistlez_user_role');
    window.localStorage.removeItem('whistlez_admin_onboarded');
    setUser(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userRole,
        isAuthenticated: Boolean(user),
        isAuthLoaded,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
