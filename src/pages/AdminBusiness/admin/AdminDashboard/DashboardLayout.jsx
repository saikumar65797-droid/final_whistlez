import { Outlet } from 'react-router-dom';
import Sidebar from '../../../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../../../components/Navbar/Navbar.jsx';
import { useSidebar } from '../../../../context/SidebarContext';
import './DashboardLayout.css';

function adminDashboardLayout() {
  const { isCollapsed } = useSidebar();

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

export default adminDashboardLayout;
