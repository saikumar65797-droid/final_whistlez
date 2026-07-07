import { useSidebar } from '../../../context/SidebarContext';
import './AdminReports.css';

function AdminReports() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="page-admin-container">
      <div className={`page-inner-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
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

export default AdminReports;
