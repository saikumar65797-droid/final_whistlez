import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../../../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../../../components/Navbar/Navbar.jsx';
import { useSidebar } from '../../../../context/SidebarContext';
import './AdminDashboardLayout.css';

function AdminDashboardLayout() {
  const { isCollapsed } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const content = document.querySelector('.whistle-page-content');
      if (content) {
        content.scrollTop = 0;
      }
    };

    scrollToTop();
    const timeoutId = setTimeout(scrollToTop, 0);
    const timeoutId2 = setTimeout(scrollToTop, 100);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, [location.pathname]);

  return (
    <div className={`dashboard-layout ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <Sidebar />
      <div className="admin-dashboard-content">
        <Navbar />
        <main className="dashboard-outlet">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
