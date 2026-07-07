import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardHome from './pages/dashboard/DashboardHome.jsx';
import Reports from './pages/reports/Reports.jsx';
import Settings from './pages/settings/Settings.jsx';
import Users from './pages/Users/Users.jsx';
import Business from './pages/Business/Business/Business.jsx';
import ViewBusiness from './pages/Business/ViewBusiness/ViewBusiness.jsx';
import ManageBusiness from './pages/Business/ManageBusiness/ManageBusiness.jsx';
import WhistlezRingtone from './pages/WhistlezRingtone/WhistlezRingtone.jsx';
import Ads from './pages/ads/Ads.jsx';
import Login from './pages/Login/Login.jsx';
import BusinessType from './pages/AdminBusiness/BusinessType/BusinessType.jsx';
import BusinessInfo from './pages/AdminBusiness/BusinessInfo/BusinessInfo.jsx';
import BusinessLocation from './pages/AdminBusiness/BusinessLocation/BusinessLocation.jsx';
import QueueConfiguration from './pages/AdminBusiness/QueueConfiguration/QueueConfiguration.jsx';
import VisualIdentity from './pages/AdminBusiness/VisualIdentity/VisualIdentity.jsx';
import Confirmation from './pages/AdminBusiness/Confirmation/Confirmation.jsx';
import AdminDashboardLayout from './pages/AdminBusiness/AdminDashboard/AdminDashboardLayout.jsx';
import AdminDashboardHome from './pages/AdminBusiness/AdminDashboard/AdminDashboard.jsx';
import AdminLiveQueue from './pages/AdminBusiness/AdminLiveQueue/AdminLiveQueue.jsx';
import AdminReports from './pages/AdminBusiness/AdminReports/AdminReports.jsx';
import AdminSettings from './pages/AdminBusiness/AdminSettings/AdminSettings.jsx';
import { useAuth } from './context/AuthContext.jsx';
import './App.css';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthLoaded } = useAuth();

  if (!isAuthLoaded) return null;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/business"
        element={
          <ProtectedRoute>
            <Business />
          </ProtectedRoute>
        }
      />
      <Route
        path="/business/view"
        element={
          <ProtectedRoute>
            <ViewBusiness />
          </ProtectedRoute>
        }
      />
      <Route
        path="/business/manage"
        element={
          <ProtectedRoute>
            <ManageBusiness />
          </ProtectedRoute>
        }
      />
      <Route
        path="/whistlez-ringtone"
        element={
          <ProtectedRoute>
            <WhistlezRingtone />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ads"
        element={
          <ProtectedRoute>
            <Ads />
          </ProtectedRoute>
        }
      />
      <Route
        path="/type"
        element={
          <ProtectedRoute>
            <BusinessType />
          </ProtectedRoute>
        }
      />
      <Route
        path="/info"
        element={
          <ProtectedRoute>
            <BusinessInfo />
          </ProtectedRoute>
        }
      />
      <Route
        path="/location"
        element={
          <ProtectedRoute>
            <BusinessLocation />
          </ProtectedRoute>
        }
      />
      <Route
        path="/queue"
        element={
          <ProtectedRoute>
            <QueueConfiguration />
          </ProtectedRoute>
        }
      />
      <Route
        path="/identity"
        element={
          <ProtectedRoute>
            <VisualIdentity />
          </ProtectedRoute>
        }
      />
      <Route
        path="/confirmation"
        element={
          <ProtectedRoute>
            <Confirmation />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboardHome />} />
        <Route path="live-queue" element={<AdminLiveQueue />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      <Route
        path="/dashboard/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </>
  );
}

export default App;
