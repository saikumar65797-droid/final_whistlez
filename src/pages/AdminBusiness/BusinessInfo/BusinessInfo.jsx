import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../../../components/AdminProgressBar/ProgressBar.jsx';
import Button from '../../../components/AdminButton/Button.jsx';
import AdminHeader from '../../../components/AdminHeader/Header.jsx';
import './BusinessInfo.css';

function BusinessInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || 'Business';

  const [businessName, setBusinessName] = useState('');
  const [domain, setDomain] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const isValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9+\s-]{7,15}$/;

    return (
      businessName.trim().length > 0 &&
      domain !== '' &&
      contactPerson.trim().length > 0 &&
      mobileRegex.test(mobile.trim()) &&
      emailRegex.test(email.trim())
    );
  }, [businessName, domain, contactPerson, mobile, email]);

  return (
    <motion.main
      className="business-info-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="info-panel">
        <section className="info-copy">
          <AdminHeader
            title="Business Information"
            description="Provide the official details of your enterprise to set up your primary profile."
          />

          <div className="info-form-grid">
            <label>
              <span>Business Name</span>
              <input
                type="text"
                placeholder="Enter your business name"
                aria-label="Business Name"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
              />
            </label>

            <label>
              <span>Domain</span>
              <select value={domain} aria-label="Domain" onChange={(event) => setDomain(event.target.value)}>
                <option value="" disabled>
                  Select a domain
                </option>
                <option value="Healthcare">Healthcare</option>
                <option value="Banking">Banking</option>
                <option value="Dining">Dining</option>
                <option value="Education">Education</option>
                <option value="Services">Services</option>
                <option value="Beauty">Beauty</option>
                <option value="Diagnostics">Diagnostics</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              <span>Contact Person</span>
              <input
                type="text"
                placeholder="Enter contact person"
                aria-label="Contact Person"
                value={contactPerson}
                onChange={(event) => setContactPerson(event.target.value)}
              />
            </label>

            <label>
              <span>Mobile Number</span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                aria-label="Mobile Number"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
              />
            </label>

            <label className="full-width">
              <span>Email Address</span>
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
        </section>

        <div className="info-footer">
          <ProgressBar activeIndex={1} />
          <div className="footer-controls">
            <button className="text-button" type="button" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <Button
              type="button"
              disabled={!isValid}
              ariaLabel="Continue to business location"
              onClick={() => {
                if (isValid) {
                  navigate('/location', { state: { category } });
                }
              }}
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default BusinessInfo;
