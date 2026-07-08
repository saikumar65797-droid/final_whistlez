import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../../../../components/AdminProgressBar/ProgressBar.jsx';
import Button from '../../../../components/AdminButton/Button.jsx';

import './QueueConfiguration.css';

function QueueConfiguration() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || 'Business';

  const savedQueueInfo = location.state?.queueInfo || {};

  const [tokenPrefix, setTokenPrefix] = useState(savedQueueInfo.tokenPrefix || '');
  const [serviceTime, setServiceTime] = useState(savedQueueInfo.serviceTime || '');
  const [maxDailyTokens, setMaxDailyTokens] = useState(savedQueueInfo.maxDailyTokens || '');
  const [notificationTime, setNotificationTime] = useState(savedQueueInfo.notificationTime || '');

  const isValid = useMemo(() => {
    const tokenCount = Number(maxDailyTokens);
    return (
      tokenPrefix.trim().length > 0 &&
      serviceTime.trim().length > 0 &&
      Number.isInteger(tokenCount) &&
      tokenCount > 0 &&
      notificationTime !== ''
    );
  }, [tokenPrefix, serviceTime, maxDailyTokens, notificationTime]);

  return (
    <motion.main
      className="queue-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="queue-panel">
        <header className="admin-page-header" aria-labelledby="onboarding-title">
          <div className="admin-header-copy">
            <h1 id="onboarding-title">Queue Configuration</h1>
            <p>Define how your customers interact with your queuing system.</p>
          </div>
        </header>

          <div className="queue-form-grid">
            <label>
              <span>Token Prefix</span>
              <input
                type="text"
                placeholder="H"
                aria-label="Token Prefix"
                value={tokenPrefix}
                onChange={(event) => setTokenPrefix(event.target.value)}
              />
              <small>This prefix will appear before every ticket number.</small>
            </label>

            <label>
              <span>Average Service Time</span>
              <input
                type="text"
                placeholder="15 Minutes"
                aria-label="Average Service Time"
                value={serviceTime}
                onChange={(event) => setServiceTime(event.target.value)}
              />
            </label>

            <label className="full-width">
              <span>Maximum Daily Tokens</span>
              <input
                type="text"
                placeholder="500"
                aria-label="Maximum Daily Tokens"
                value={maxDailyTokens}
                onChange={(event) => setMaxDailyTokens(event.target.value)}
              />
              <small>Limit the number of tokens issued per day to prevent overbooking.</small>
            </label>

            <label className="full-width">
              <span>Notification Before Turn</span>
              <select
                value={notificationTime}
                aria-label="Notification Before Turn"
                onChange={(event) => setNotificationTime(event.target.value)}
              >
                <option value="" disabled>
                  Select notification time
                </option>
                <option value="5 Minutes">5 Minutes</option>
                <option value="10 Minutes">10 Minutes</option>
                <option value="15 Minutes">15 Minutes</option>
                <option value="20 Minutes">20 Minutes</option>
              </select>
            </label>

            <div className="queue-note">
              <p>
                Customers will receive an SMS alert when they are within this time threshold of their expected turn.
              </p>
            </div>
          </div>

        <div className="queue-footer">
          <ProgressBar activeIndex={3} />
          <div className="footer-controls">
            <button className="text-button" type="button" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <Button
              type="button"
              disabled={!isValid}
              ariaLabel="Continue to visual identity"
              onClick={() => {
                if (isValid) {
                  navigate('/identity', {
                    state: {
                      ...location.state,
                      queueInfo: {
                        tokenPrefix,
                        serviceTime,
                        maxDailyTokens,
                        notificationTime,
                      },
                    },
                  });
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

export default QueueConfiguration;
