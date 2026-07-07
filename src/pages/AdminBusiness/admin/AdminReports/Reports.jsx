import Sidebar from '../../../../components/Sidebar/Sidebar';
import Navbar from '../../../../components/Navbar/Navbar';
import { useSidebar } from '../../../../context/SidebarContext';
import './AdminReports.css';

function Reports() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="page-admin-container">
      <Sidebar />
      <div className={`page-inner-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <Navbar />
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

export default Reports;
