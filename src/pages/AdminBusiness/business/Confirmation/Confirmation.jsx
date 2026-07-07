import { useLocation, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegClock, FaQrcode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../../../../components/AdminButton/Button.jsx';
import './Confirmation.css';

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || 'Business';
  const businessName = location.state?.businessName || 'Your business';
  const locationLabel = location.state?.locationLabel || 'Hyderabad, TS';

  return (
    <motion.main
      className="confirmation-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="confirmation-panel">
        <div className="confirmation-badge">✓</div>
        <div className="confirmation-copy">
          <h1>Business Profile Created Successfully!</h1>
          <p>Your business is now ready to manage smart digital queues with Tokenz.</p>
        </div>

        <div className="confirmation-card">
          <div className="confirmation-card-header">
            <div>
              <h2>{businessName}</h2>
              <span className="category-tag">{category.toUpperCase()}</span>
            </div>
            <span className="status-pill">Active</span>
          </div>

          <div className="confirmation-card-grid">
            <div>
              <p className="item-label">Location</p>
              <p className="item-value">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{locationLabel}</span>
              </p>
            </div>
            <div>
              <p className="item-label">Business Hours</p>
              <p className="item-value">
                <FaRegClock aria-hidden="true" />
                <span>09:00 AM - 08:00 PM</span>
              </p>
            </div>
            <div>
              <p className="item-label">Configuration</p>
              <p className="item-value">
                <FaQrcode aria-hidden="true" />
                <span>QR Ready</span>
              </p>
            </div>
          </div>
        </div>

        <div className="confirmation-status-grid">
          <div className="status-pill-card">
            <span>✓</span>
            <p>Business Registered</p>
          </div>
          <div className="status-pill-card">
            <span>✓</span>
            <p>Location Verified</p>
          </div>
          <div className="status-pill-card">
            <span>✓</span>
            <p>Queue Configured</p>
          </div>
          <div className="status-pill-card">
            <span>✓</span>
            <p>Notifications Enabled</p>
          </div>
        </div>

        <div className="confirmation-action">
          <Button
            type="button"
            ariaLabel="Go to admin dashboard"
            onClick={() => {
              // Mark admin as onboarded
              localStorage.setItem('whistlez_admin_onboarded', 'true');
              navigate('/admin');
            }}
          >
            Go To Dashboard →
          </Button>
        </div>

        <p className="confirmation-note">
          You can now start generating tokens, managing queues, and serving customers efficiently.
        </p>
      </div>
    </motion.main>
  );
}

export default Confirmation;
