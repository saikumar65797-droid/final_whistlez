import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const DEFAULT_USER_KEY = 'whistlez_user';
const USERS_STORAGE_KEY = 'whistlez_users';
const PENDING_USER_KEY = 'whistlez_pending_user';
const PENDING_USER_ROLE_KEY = 'whistlez_pending_user_role';
const DEFAULT_ADMIN_EMAIL = 'admin123@gmail.com';
const DEFAULT_ADMIN_PASSWORD = 'Admin123@';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const storedUser = window.localStorage.getItem(DEFAULT_USER_KEY) || window.sessionStorage.getItem(PENDING_USER_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });
  const [userRole, setUserRole] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const storedRole = window.localStorage.getItem('whistlez_user_role') || window.sessionStorage.getItem(PENDING_USER_ROLE_KEY);
      return storedRole || null;
    } catch {
      return null;
    }
  });
  const [business, setBusiness] = useState(null);
  const [isOnboarded, setIsOnboarded] = useState(false);
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
    const storedLocalUser = window.localStorage.getItem(DEFAULT_USER_KEY);
    const storedPendingUser = window.sessionStorage.getItem(PENDING_USER_KEY);

    if (storedLocalUser && !user) {
      const parsedUser = JSON.parse(storedLocalUser);
      setUser(parsedUser);
      const storedRole = window.localStorage.getItem('whistlez_user_role');
      setUserRole(storedRole || null);
      const users = getStoredUsers();
      const current = users[parsedUser.email] || {};
      setBusiness(current.business || null);
      setIsOnboarded(current.onboarded === true);
    } else if (!storedLocalUser && storedPendingUser && !user) {
      const parsedPending = JSON.parse(storedPendingUser);
      setUser({ email: parsedPending.email });
      const pendingRole = window.sessionStorage.getItem(PENDING_USER_ROLE_KEY);
      setUserRole(pendingRole || null);
      setBusiness(null);
      setIsOnboarded(false);
    } else if (user) {
      const users = getStoredUsers();
      const current = users[user.email] || {};
      setBusiness(current.business || null);
      setIsOnboarded(current.onboarded === true);
    }

    setIsAuthLoaded(true);
  }, [user]);

  const login = (email, password) => {
    const users = getStoredUsers();
    const normalizedEmail = email.trim().toLowerCase();

    // Check if it's a registered admin
    if (users[normalizedEmail] && users[normalizedEmail].password === password) {
      const userRecord = users[normalizedEmail];
      const userData = { email: normalizedEmail };
      window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(userData));
      window.localStorage.setItem('whistlez_user_role', userRecord.role);
      window.localStorage.setItem('whistlez_admin_onboarded', userRecord.onboarded ? 'true' : 'false');
      setUser(userData);
      setUserRole(userRecord.role);
      setBusiness(userRecord.business || null);
      setIsOnboarded(userRecord.onboarded === true);
      return true;
    }

    // Check if it's the superadmin
    if (normalizedEmail === DEFAULT_ADMIN_EMAIL && password === DEFAULT_ADMIN_PASSWORD) {
      const userData = { email: normalizedEmail };
      window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(userData));
      window.localStorage.setItem('whistlez_user_role', 'superadmin');
      window.localStorage.setItem('whistlez_admin_onboarded', 'true');
      setUser(userData);
      setUserRole('superadmin');
      setIsOnboarded(true);
      setBusiness(null);
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

    const pendingUser = {
      email: normalizedEmail,
      password,
      role: 'admin',
    };

    window.sessionStorage.setItem(PENDING_USER_KEY, JSON.stringify(pendingUser));
    window.sessionStorage.setItem(PENDING_USER_ROLE_KEY, 'admin');

    const userData = { email: normalizedEmail };
    setUser(userData);
    setUserRole('admin');
    setIsOnboarded(false);
    setBusiness(null);
    return true;
  };

  const logout = () => {
    window.localStorage.removeItem(DEFAULT_USER_KEY);
    window.localStorage.removeItem('whistlez_user_role');
    window.localStorage.removeItem('whistlez_admin_onboarded');
    window.sessionStorage.removeItem(PENDING_USER_KEY);
    window.sessionStorage.removeItem(PENDING_USER_ROLE_KEY);
    setUser(null);
    setUserRole(null);
    setBusiness(null);
    setIsOnboarded(false);
  };

  const saveBusinessProfile = (businessData) => {
    if (!user || !user.email) return;

    const users = getStoredUsers();
    const normalizedEmail = user.email.trim().toLowerCase();
    let currentUser = users[normalizedEmail];

    if (!currentUser) {
      const pendingRaw = window.sessionStorage.getItem(PENDING_USER_KEY);
      const pendingUser = pendingRaw ? JSON.parse(pendingRaw) : null;
      if (!pendingUser || pendingUser.email !== normalizedEmail) return;
      currentUser = {
        password: pendingUser.password,
        role: pendingUser.role || 'admin',
        onboarded: true,
        business: businessData,
      };
    } else {
      currentUser = {
        ...currentUser,
        business: businessData,
        onboarded: true,
      };
    }

    users[normalizedEmail] = currentUser;
    saveUsers(users);
    window.localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify({ email: normalizedEmail }));
    window.localStorage.setItem('whistlez_user_role', currentUser.role);
    window.localStorage.setItem('whistlez_admin_onboarded', 'true');
    window.sessionStorage.removeItem(PENDING_USER_KEY);
    window.sessionStorage.removeItem(PENDING_USER_ROLE_KEY);
    setBusiness(businessData);
    setIsOnboarded(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userRole,
        business,
        isOnboarded,
        isAuthenticated: Boolean(user),
        isAuthLoaded,
        login,
        logout,
        register,
        saveBusinessProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
