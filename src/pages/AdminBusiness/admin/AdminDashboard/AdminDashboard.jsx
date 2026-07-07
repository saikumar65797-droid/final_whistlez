import { useSidebar } from '../../../../context/SidebarContext';
import './AdminDashboard.css';

// SVG Icons
const TodayVisitorsIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 13.2C0 12.6334 0.146 12.1127 0.438 11.638C0.73 11.1634 1.11733 10.8007 1.6 10.55C2.63333 10.0334 3.68333 9.64603 4.75 9.38803C5.81667 9.13002 6.9 9.00069 8 9.00003C9.1 8.99936 10.1833 9.12869 11.25 9.38803C12.3167 9.64736 13.3667 10.0347 14.4 10.55C14.8833 10.8 15.271 11.1627 15.563 11.638C15.855 12.1134 16.0007 12.634 16 13.2V14C16 14.55 15.8043 15.021 15.413 15.413C15.0217 15.805 14.5507 16.0007 14 16H2C1.45 16 0.979333 15.8044 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V13.2ZM17.45 16C17.6333 15.7 17.771 15.3794 17.863 15.038C17.955 14.6967 18.0007 14.3507 18 14V13C18 12.2667 17.796 11.5624 17.388 10.887C16.98 10.2117 16.4007 9.63269 15.65 9.15003C16.5 9.25003 17.3 9.42103 18.05 9.66303C18.8 9.90503 19.5 10.2007 20.15 10.55C20.75 10.8834 21.2083 11.254 21.525 11.662C21.8417 12.07 22 12.516 22 13V14C22 14.55 21.8043 15.021 21.413 15.413C21.0217 15.805 20.5507 16.0007 20 16H17.45ZM5.175 6.82503C4.39167 6.04169 4 5.10003 4 4.00003C4 2.90003 4.39167 1.95836 5.175 1.17503C5.95833 0.391692 6.9 2.56407e-05 8 2.56407e-05C9.1 2.56407e-05 10.0417 0.391692 10.825 1.17503C11.6083 1.95836 12 2.90003 12 4.00003C12 5.10003 11.6083 6.04169 10.825 6.82503C10.0417 7.60836 9.1 8.00003 8 8.00003C6.9 8.00003 5.95833 7.60836 5.175 6.82503ZM16.825 6.82503C16.0417 7.60836 15.1 8.00003 14 8.00003C13.8167 8.00003 13.5833 7.97936 13.3 7.93803C13.0167 7.89669 12.7833 7.85069 12.6 7.80003C13.05 7.26669 13.396 6.67503 13.638 6.02503C13.88 5.37503 14.0007 4.70003 14 4.00003C13.9993 3.30003 13.8787 2.62503 13.638 1.97503C13.3973 1.32503 13.0513 0.733359 12.6 0.200025C12.8333 0.116692 13.0667 0.0623592 13.3 0.0370258C13.5333 0.0116925 13.7667 -0.000641026 14 2.56407e-05C15.1 2.56407e-05 16.0417 0.391692 16.825 1.17503C17.6083 1.95836 18 2.90003 18 4.00003C18 5.10003 17.6083 6.04169 16.825 6.82503Z" fill="currentColor"/>
  </svg>
);

const WaitingNowIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18H12V15C12 13.9 11.6083 12.9583 10.825 12.175C10.0417 11.3917 9.1 11 8 11C6.9 11 5.95833 11.3917 5.175 12.175C4.39167 12.9583 4 13.9 4 15V18ZM8 9C9.1 9 10.0417 8.60833 10.825 7.825C11.6083 7.04167 12 6.1 12 5V2H4V5C4 6.1 4.39167 7.04167 5.175 7.825C5.95833 8.60833 6.9 9 8 9ZM0 20V18H2V15C2 13.9833 2.2375 13.0292 2.7125 12.1375C3.1875 11.2458 3.85 10.5333 4.7 10C3.85 9.46667 3.1875 8.75417 2.7125 7.8625C2.2375 6.97083 2 6.01667 2 5V2H0V0H16V2H14V5C14 6.01667 13.7625 6.97083 13.2875 7.8625C12.8125 8.75417 12.15 9.46667 11.3 10C12.15 10.5333 12.8125 11.2458 13.2875 12.1375C13.7625 13.0292 14 13.9833 14 15V18H16V20H0Z" fill="currentColor"/>
  </svg>
);

const NowServingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 17.5V15.45C12.5 15.0167 13.7083 14.1833 14.625 12.95C15.5417 11.7167 16 10.3167 16 8.75C16 7.18333 15.5417 5.78333 14.625 4.55C13.7083 3.31667 12.5 2.48333 11 2.05V0C13.0667 0.466667 14.75 1.5125 16.05 3.1375C17.35 4.7625 18 6.63333 18 8.75C18 10.8667 17.35 12.7375 16.05 14.3625C14.75 15.9875 13.0667 17.0333 11 17.5ZM0 11.775V5.775H4L9 0.775V16.775L4 11.775H0ZM11 12.775V4.725C11.7833 5.09167 12.3958 5.64167 12.8375 6.375C13.2792 7.10833 13.5 7.90833 13.5 8.775C13.5 9.625 13.2792 10.4125 12.8375 11.1375C12.3958 11.8625 11.7833 12.4083 11 12.775Z" fill="currentColor"/>
  </svg>
);

const AverageWaitTimeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="currentColor"/>
  </svg>
);

const OpenLiveQueueIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 13.2C0 12.6334 0.146 12.1127 0.438 11.638C0.73 11.1634 1.11733 10.8007 1.6 10.55C2.63333 10.0334 3.68333 9.64603 4.75 9.38803C5.81667 9.13002 6.9 9.00069 8 9.00003C9.1 8.99936 10.1833 9.12869 11.25 9.38803C12.3167 9.64736 13.3667 10.0347 14.4 10.55C14.8833 10.8 15.271 11.1627 15.563 11.638C15.855 12.1134 16.0007 12.634 16 13.2V14C16 14.55 15.8043 15.021 15.413 15.413C15.0217 15.805 14.5507 16.0007 14 16H2C1.45 16 0.979333 15.8044 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V13.2ZM17.45 16C17.6333 15.7 17.771 15.3794 17.863 15.038C17.955 14.6967 18.0007 14.3507 18 14V13C18 12.2667 17.796 11.5624 17.388 10.887C16.98 10.2117 16.4007 9.63269 15.65 9.15003C16.5 9.25003 17.3 9.42103 18.05 9.66303C18.8 9.90503 19.5 10.2007 20.15 10.55C20.75 10.8834 21.2083 11.254 21.525 11.662C21.8417 12.07 22 12.516 22 13V14C22 14.55 21.8043 15.021 21.413 15.413C21.0217 15.805 20.5507 16.0007 20 16H17.45ZM5.175 6.82503C4.39167 6.04169 4 5.10003 4 4.00003C4 2.90003 4.39167 1.95836 5.175 1.17503C5.95833 0.391692 6.9 2.56407e-05 8 2.56407e-05C9.1 2.56407e-05 10.0417 0.391692 10.825 1.17503C11.6083 1.95836 12 2.90003 12 4.00003C12 5.10003 11.6083 6.04169 10.825 6.82503C10.0417 7.60836 9.1 8.00003 8 8.00003C6.9 8.00003 5.95833 7.60836 5.175 6.82503ZM16.825 6.82503C16.0417 7.60836 15.1 8.00003 14 8.00003C13.8167 8.00003 13.5833 7.97936 13.3 7.93803C13.0167 7.89669 12.7833 7.85069 12.6 7.80003C13.05 7.26669 13.396 6.67503 13.638 6.02503C13.88 5.37503 14.0007 4.70003 14 4.00003C13.9993 3.30003 13.8787 2.62503 13.638 1.97503C13.3973 1.32503 13.0513 0.733359 12.6 0.200025C12.8333 0.116692 13.0667 0.0623592 13.3 0.0370258C13.5333 0.0116925 13.7667 -0.000641026 14 2.56407e-05C15.1 2.56407e-05 16.0417 0.391692 16.825 1.17503C17.6083 1.95836 18 2.90003 18 4.00003C18 5.10003 17.6083 6.04169 16.825 6.82503Z" fill="white"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.61491 0.78125L12.4482 6.61458L6.61491 12.4479M12.4482 6.61458H0.781575" stroke="#1089D3" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function DashboardHome() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`page-admin-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className="page-inner-container">
        <div className="whistle-page-content">
          <section className="admin-dashboard-home">
            <div className="admin-dashboard-greeting">
              <h1>Good Morning, Admin 👋</h1>
            </div>

            <div className="admin-dashboard-stats-row">
              {[
                { label: "Today's Visitors", value: '248', icon: TodayVisitorsIcon, color: '#2f80ed', isSvg: true },
                { label: 'Waiting Now', value: '14', icon: WaitingNowIcon, color: '#f2a41b', isSvg: true },
                { label: 'Now Serving', value: 'A124', icon: NowServingIcon, color: '#8b5cf6', isSvg: true },
                { label: 'Average Wait Time', value: '6 min', icon: AverageWaitTimeIcon, color: '#16a34a', isSvg: true },
              ].map((stat) => (
                <div key={stat.label} className="admin-dashboard-stat-card">
                  <div className="stat-icon" style={{ background: `${stat.color}1A`, color: stat.color }}>
                    {stat.isSvg ? <stat.icon /> : stat.icon}
                  </div>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value" style={{ color: stat.color }}>{stat.value}</p>
                </div>
              ))}
            </div>

            <button type="button" className="admin-dashboard-cta">
              <div className="cta-icon-left">
                <OpenLiveQueueIcon />
              </div>
              <div className="cta-content">
                <p className="admin-cta-title">Open Live Queue</p>
                <p className="cta-text">View and manage the live queue in real-time</p>
              </div>
              <div className="cta-icon-right">
                <ArrowRightIcon />
              </div>
            </button>

      <div className="admin-dashboard-cards-row">
        <div className="admin-dashboard-card">
          <div className="card-heading">
            <p>Queue Status</p>
            <span className="open">Open</span>
          </div>
          <div className="card-body">
            <div className="card-icon">🩺</div>
            <div>
              <p className="card-title">General OPD Queue</p>
              <div className="card-metrics">
                <div>
                  <p>Waiting</p>
                  <strong>14</strong>
                </div>
                <div>
                  <p>Serving</p>
                  <strong>A124</strong>
                </div>
                <div>
                  <p>Completed</p>
                  <strong>234</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="card-heading">
            <p>Monthly Overview</p>
            <span>May 2026</span>
          </div>
          <div className="card-body">
            <p className="big-number">8,420</p>
            <p className="metric-label">Tokens</p>
            <p className="subtext">Avg Daily Visitors <strong>281</strong></p>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="card-heading">
            <p>Working Hours</p>
          </div>
          <div className="work-hours">
            <div className="work-hours-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5C10.625 2.5 2.5 10.625 2.5 20C2.5 29.375 10.625 37.5 20 37.5C29.375 37.5 37.5 29.375 37.5 20C37.5 10.625 29.375 2.5 20 2.5ZM20 35C11.75 35 5 28.25 5 20C5 11.75 11.75 5 20 5C28.25 5 35 11.75 35 20C35 28.25 28.25 35 20 35ZM20.75 10H19.25V21.25L29.375 27.5L30.3125 26.25L20.75 20.625V10Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="work-hours-content">
              <div className="work-hours-item">
                <p>Open</p>
                <strong>08:00 AM</strong>
              </div>
              <div className="work-hours-divider"></div>
              <div className="work-hours-item">
                <p>Close</p>
                <strong>08:00 PM</strong>
              </div>
            </div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <p className="progress-label">10h 15m readminmaining</p>
        </div>
      </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
