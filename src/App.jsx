import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardHome from './pages/superadmin/dashboard/DashboardHome.jsx';
import Reports from './pages/superadmin/Reports/Reports.jsx';
import Settings from './pages/superadmin/setting/Settings.jsx';
import Users from './pages/superadmin/users/Users.jsx';
import Business from './pages/superadmin/business/business/Business.jsx';
import ViewBusiness from './pages/superadmin/business/viewbusiness/ViewBusiness.jsx';
import ManageBusiness from './pages/superadmin/business/managebusiness/ManageBusiness.jsx';
import WhistlezRingtone from './pages/superadmin/whistlezringtone/WhistlezRingtone.jsx';
import Ads from './pages/superadmin/ads/Ads.jsx';
import Login from './pages/Login/Login.jsx';
import BusinessType from './pages/AdminBusiness/business/BusinessType/BusinessType.jsx';
import BusinessInfo from './pages/AdminBusiness/business/BusinessInfo/BusinessInfo.jsx';
import BusinessLocation from './pages/AdminBusiness/business/BusinessLocation/BusinessLocation.jsx';
import QueueConfiguration from './pages/AdminBusiness/business/QueueConfiguration/QueueConfiguration.jsx';
import VisualIdentity from './pages/AdminBusiness/business/VisualIdentity/VisualIdentity.jsx';
import Confirmation from './pages/AdminBusiness/business/Confirmation/Confirmation.jsx';
import AdminDashboardLayout from './pages/AdminBusiness/admin/AdminDashboard/AdminDashboardLayout.jsx';
import AdminDashboardHome from './pages/AdminBusiness/admin/AdminDashboard/AdminDashboard.jsx';
import AdminLiveQueue from './pages/AdminBusiness/admin/AdminLiveQueue/AdminLiveQueue.jsx';
import AdminReports from './pages/AdminBusiness/admin/AdminReports/AdminReports.jsx';
import AdminSettings from './pages/AdminBusiness/admin/AdminSettings/AdminSettings.jsx';
import { useAuth } from './context/AuthContext.jsx';
import './App.css';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Immediate scroll to top
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Scroll all possible containers to top
      const containers = [
        // SuperAdmin containers
        document.querySelector('.su-page-content'),
        document.querySelector('.su-page-main-container'),
        document.querySelector('.su-page-inner-container'),
        // Admin containers
        document.querySelector('.page-admin-container'),
        document.querySelector('.page-inner-container'),
        document.querySelector('.whistle-page-content'),
        document.querySelector('.admin-dashboard-content'),
        // Other containers
        document.querySelector('.dashboard-outlet'),
        document.querySelector('.dashboard-layout'),
        document.querySelector('main'),
        document.documentElement,
        document.body,
      ];

      containers.forEach((container) => {
        if (container && container.scrollHeight > 0) {
          container.scrollTop = 0;
        }
      });
    };

    // Scroll immediately
    scrollToTop();

    // Also try after a micro delay to ensure DOM is ready
    const timeoutId = setTimeout(scrollToTop, 0);
    
    // Try again after another delay to catch any deferred rendering
    const timeoutId2 = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
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
        path="/superadmin"
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/dashboard"
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/business"
        element={
          <ProtectedRoute>
            <Business />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/business/view"
        element={
          <ProtectedRoute>
            <ViewBusiness />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/business/manage"
        element={
          <ProtectedRoute>
            <ManageBusiness />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/whistlezringtone"
        element={
          <ProtectedRoute>
            <WhistlezRingtone />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/whistlez-ringtone"
        element={
          <ProtectedRoute>
            <WhistlezRingtone />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/ads"
        element={
          <ProtectedRoute>
            <Ads />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/setting"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superadmin/reports"
        element={
          <ProtectedRoute>
            <Reports />
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
