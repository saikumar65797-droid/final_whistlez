import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/AdminSidebar/Sidebar.jsx';
import Navbar from '../../../components/AdminNavabr/Navbar.jsx';
import { useSidebar } from '../../../context/SidebarContext';
import './DashboardLayout.css';

function adminDashboardLayout() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`dashboard-layout ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <Sidebar />
      <div className="dashboard-content">
        <Navbar />
        <main className="dashboard-outlet">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default adminDashboardLayout;
