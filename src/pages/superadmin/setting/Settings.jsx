import Sidebar from '../../../components/Sidebar/Sidebar';
import Navbar from '../../../components/Navbar/Navbar';
import { useSidebar } from '../../../context/SidebarContext';
import './Settings.css';

function Settings() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="su-page-main-container">
      <Sidebar />
      <div className={`su-page-inner-container ${isCollapsed ? 'su-collapsed' : 'su-expanded'}`}>
        <Navbar />
        <div className="su-page-content">
          <section className="settings-section">
            <h1>Settings</h1>
            <p>Configure and manage your application settings</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Settings;
