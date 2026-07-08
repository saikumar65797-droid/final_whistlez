import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from '../../../../components/AdminProgressBar/ProgressBar.jsx';
import Button from '../../../../components/AdminButton/Button.jsx';

import './VisualIdentity.css';

function VisualIdentity() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || 'Business';
  const savedBusinessInfo = location.state?.businessInfo || {};
  const savedLocationInfo = location.state?.locationInfo || {};
  const savedQueueInfo = location.state?.queueInfo || {};

  const logoInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const [logoFile, setLogoFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  useEffect(() => {
    if (!logoFile) {
      setLogoPreview(null);
      return;
    }
    const url = URL.createObjectURL(logoFile);
    setLogoPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [logoFile]);

  useEffect(() => {
    if (!coverFile) {
      setCoverPreview(null);
      return;
    }
    const url = URL.createObjectURL(coverFile);
    setCoverPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [coverFile]);

  const isValid = useMemo(() => !!logoFile && !!coverFile, [logoFile, coverFile]);

  return (
    <motion.main
      className="identity-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="identity-panel">
        <header className="admin-page-header" aria-labelledby="onboarding-title">
          <div className="admin-header-copy">
            <h1 id="onboarding-title">Visual Identity</h1>
            <p>Upload your brand assets to make the business experience look and feel like your company.</p>
          </div>
        </header>

          <div className="identity-grid">
            <div className="identity-card upload-card">
              <div className="upload-label">Business Logo</div>
              <button
                type="button"
                className="upload-dropzone"
                aria-label="Upload business logo"
                onClick={() => logoInputRef.current?.click()}
              >
                <div className="upload-icon">☁</div>
                <span>{logoFile ? logoFile.name : 'Drag & drop business logo'}</span>
                <small>PNG, JPG up to 1 MB</small>
              </button>
              <input
                ref={logoInputRef}
                type="file"
                accept="image/png,image/jpeg"
                hidden
                onChange={(event) => setLogoFile(event.target.files?.[0] || null)}
              />
            </div>

            <div className="identity-card upload-card">
              <div className="upload-label">Business Cover Image</div>
              <button
                type="button"
                className="upload-dropzone"
                aria-label="Upload cover image"
                onClick={() => coverInputRef.current?.click()}
              >
                <div className="upload-icon">☁</div>
                <span>{coverFile ? coverFile.name : 'Drag & drop business logo'}</span>
                <small>PNG, JPG up to 1 MB</small>
              </button>
              <input
                ref={coverInputRef}
                type="file"
                accept="image/png,image/jpeg"
                hidden
                onChange={(event) => setCoverFile(event.target.files?.[0] || null)}
              />
            </div>

            <div className="identity-card preview-card">
              <div className="preview-label">Logo Preview</div>
              <div className="preview-box">
                <div
                  className={`preview-image logo-sample ${logoPreview ? 'has-image' : ''}`}
                  aria-hidden="true"
                  style={logoPreview ? { backgroundImage: `url(${logoPreview})` } : undefined}
                >
                  {!logoPreview && <span className="preview-placeholder">Logo preview</span>}
                  {logoFile && (
                    <button
                      type="button"
                      className="preview-remove"
                      onClick={() => setLogoFile(null)}
                      aria-label="Remove logo"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="identity-card preview-card">
              <div className="preview-label">Cover Preview</div>
              <div className="preview-box">
                <div
                  className={`preview-image cover-sample ${coverPreview ? 'has-image' : ''}`}
                  aria-hidden="true"
                  style={coverPreview ? { backgroundImage: `url(${coverPreview})` } : undefined}
                >
                  {!coverPreview && <span className="preview-placeholder">Cover preview</span>}
                  {coverFile && (
                    <button
                      type="button"
                      className="preview-remove"
                      onClick={() => setCoverFile(null)}
                      aria-label="Remove cover"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

        <div className="identity-footer">
          <ProgressBar activeIndex={4} />
          <div className="footer-controls">
            <button className="text-button" type="button" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <Button
              type="button"
              disabled={!isValid}
              ariaLabel="Finish onboarding"
              onClick={() => {
                if (isValid) {
                  navigate('/confirmation', {
                    state: {
                      category,
                      businessInfo: savedBusinessInfo,
                      locationInfo: savedLocationInfo,
                      queueInfo: savedQueueInfo,
                      businessName: savedBusinessInfo.businessName || 'Your business',
                      locationLabel: savedLocationInfo.city
                        ? `${savedLocationInfo.city}, ${savedLocationInfo.stateRegion}`
                        : 'Hyderabad, TS',
                    },
                  });
                }
              }}
            >
              Finish →
            </Button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default VisualIdentity;
