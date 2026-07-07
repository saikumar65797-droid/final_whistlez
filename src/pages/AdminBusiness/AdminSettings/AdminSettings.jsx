import { useSidebar } from '../../../context/SidebarContext';
import './AdminSettings.css';

function AdminSettings() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="page-admin-container">
      <div className={`page-inner-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="page-content">
          <section className="settings-section">
            <h1>Settings</h1>
            <p>Configure and manage your application settings</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
