import { useSidebar } from '../../../../context/SidebarContext';
import './AdminReports.css';

function AdminReports() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`page-admin-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className="page-inner-container">
        <div className="whistle-page-content">
          <section className="admin-reports-section">
            <h1>Reports</h1>
            <p>View and analyze queue reports and analytics</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminReports;
