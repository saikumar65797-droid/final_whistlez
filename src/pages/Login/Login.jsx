import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import WhistlezLogo from '../../assets/whistlez-logo.png';
import './Login.css';

const SUPERADMIN_EMAIL = 'admin123@gmail.com';

function Login() {
  const navigate = useNavigate();
  const { login, register, isAuthenticated, user } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      if (user?.email?.toLowerCase() === SUPERADMIN_EMAIL) {
        navigate('/dashboard');
      } else {
        navigate('/admin');
      }
    }
  }, [isAuthenticated, navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Email and password are required.');
      return;
    }

    if (isSignup) {
      if (password !== confirmPassword) {
        setError('Passwords must match.');
        return;
      }

      if (register(email, password)) {
        navigate('/type');
        return;
      }

      setError('An account with that email already exists.');
      return;
    }

    if (login(email, password)) {
      if (email.trim().toLowerCase() === SUPERADMIN_EMAIL) {
        navigate('/dashboard');
      } else {
        navigate('/admin');
      }
      return;
    }

    setError('Invalid email or password.');
  };

  return (
    <div className="login-page">
      <div className="login-layout">
        <div className="login-panel">
          <div className="login-branding">
            <h1>{isSignup ? 'Create your account' : 'Whistlez Admin'}</h1>
            <p>
              {isSignup
                ? 'Sign up for secure access to the Whistlez dashboard and manage your admin console.'
                : 'Secure admin access to your dashboard with modern, elegant styling.'}
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin123@gmail.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin123@"
              required
            />

            {isSignup && (
              <>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </>
            )}

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-submit">
              {isSignup ? 'Create account' : 'Sign in'}
            </button>
          </form>

          <div className="login-switch">
            <p>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <button type="button" className="login-switch-button" onClick={() => setIsSignup((current) => !current)}>
                {isSignup ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>

        <div className="login-visual">
          <div className="login-visual-overlay" />
          <div className="login-visual-content">
            <img className="login-visual-logo" src={WhistlezLogo} alt="Whistlez logo" />
            <h2>Welcome back</h2>
            <p>Manage your businesses, users, ads, and reports from one beautifully crafted admin console.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
