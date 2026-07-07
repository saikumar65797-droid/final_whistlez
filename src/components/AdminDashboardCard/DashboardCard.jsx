import './DashboardCard.css';

function DashboardCard({ title, value, text, icon, color }) {
  return (
    <div className="admin-dashboard-stat-card">
      <div className="admin-stat-icon" style={{ background: `${color}1A`, color }}>
        {icon}
      </div>
      <p className="admin-stat-label">{title}</p>
      <p className="admin-stat-value">{value}</p>
      {text && <p className="admin-stat-text">{text}</p>}
    </div>
  );
}

export default DashboardCard;
