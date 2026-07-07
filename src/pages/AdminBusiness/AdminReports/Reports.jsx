import Sidebar from '../../../components/AdminSidebar/Sidebar';
import Navbar from '../../../components/AdminNavabr/Navbar';
import { useSidebar } from '../../../context/SidebarContext';
import './Reports.css';

function Reports() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="page-admin-container">
      <Sidebar />
      <div className={`page-inner-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <Navbar />
        <div className="page-content">
          <section className="reports-section">
            <h1>Reports</h1>
            <p>View and analyze queue reports and analytics</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Reports;
