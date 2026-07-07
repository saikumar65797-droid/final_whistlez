import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import { useSidebar } from '../../context/SidebarContext';
import './DashboardLayout.css';

function DashboardLayout() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`su-dashboard-layout ${isCollapsed ? 'su-collapsed' : 'su-expanded'}`}>
      <Sidebar />
      <div className="su-dashboard-content">
        <Navbar />
        <main className="su-dashboard-outlet">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
