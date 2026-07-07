import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../../../components/AdminProgressBar/ProgressBar.jsx';
import Button from '../../../components/AdminButton/Button.jsx';
import AdminHeader from '../../../components/AdminHeader/Header.jsx';
import './BusinessLocation.css';

function BusinessLocation() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || 'Business';

  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [mapsLink, setMapsLink] = useState('');

  const isValid = useMemo(() => {
    const pincodeRegex = /^[0-9]{4,10}$/;
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;
    return (
      address.trim().length > 0 &&
      country !== '' &&
      stateRegion !== '' &&
      city.trim().length > 0 &&
      pincodeRegex.test(pincode.trim()) &&
      urlRegex.test(mapsLink.trim())
    );
  }, [address, country, stateRegion, city, pincode, mapsLink]);

  return (
    <motion.main
      className="business-location-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="location-panel">
        <AdminHeader
          title="Business Location"
          description="Configure your primary business operating address. This information will be displayed to customers on the app and used for automated distance calculations."
        />

          <div className="location-form-grid">
            <label className="full-width">
              <span>Address</span>
              <textarea
                placeholder="Enter your business address"
                aria-label="Address"
                rows="4"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </label>

            <label>
              <span>Country</span>
              <select value={country} aria-label="Country" onChange={(event) => setCountry(event.target.value)}>
                <option value="" disabled>
                  Select country
                </option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </label>

            <label>
              <span>State</span>
              <select value={stateRegion} aria-label="State" onChange={(event) => setStateRegion(event.target.value)}>
                <option value="" disabled>
                  Select state
                </option>
                <option value="Telangana">Telangana</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
              </select>
            </label>

            <label>
              <span>City</span>
              <input
                type="text"
                placeholder="Enter city"
                aria-label="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </label>

            <label>
              <span>Pincode</span>
              <input
                type="text"
                placeholder="Enter pincode"
                aria-label="Pincode"
                value={pincode}
                onChange={(event) => setPincode(event.target.value)}
              />
            </label>

            <label className="full-width">
              <span>Google Maps Link</span>
              <input
                type="url"
                placeholder="https://maps.google.com/..."
                aria-label="Google Maps Link"
                value={mapsLink}
                onChange={(event) => setMapsLink(event.target.value)}
              />
            </label>
          </div>

        <div className="location-footer">
          <ProgressBar activeIndex={2} />
          <div className="footer-controls">
            <button className="text-button" type="button" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <Button
              type="button"
              disabled={!isValid}
              ariaLabel="Continue to queue configuration"
              onClick={() => {
                if (isValid) {
                  navigate('/queue', { state: { category } });
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

export default BusinessLocation;
