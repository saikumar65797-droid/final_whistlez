import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHospital,
  FaUniversity,
  FaUtensils,
  FaGraduationCap,
  FaTools,
  FaCut,
  FaFlask,
  FaTicketAlt,
} from 'react-icons/fa';
import AdminHeader from '../../../components/AdminHeader/Header.jsx';
import BusinessCard from '../../../components/AdminBusinessCard/BusinessCard.jsx';
import ProgressBar from '../../../components/AdminProgressBar/ProgressBar.jsx';
import Button from '../../../components/AdminButton/Button.jsx';
import './BusinessType.css';

const categories = [
  { label: 'Health Care', icon: FaHospital, color: '#F24E1E' },
  { label: 'Banking', icon: FaUniversity, color: '#F2A41B' },
  { label: 'Dining', icon: FaUtensils, color: '#EB5757' },
  { label: 'Education', icon: FaGraduationCap, color: '#56CCF2' },
  { label: 'Services', icon: FaTools, color: '#27AE60' },
  { label: 'Beauty', icon: FaCut, color: '#A259FF' },
  { label: 'Diagnostics', icon: FaFlask, color: '#FF8A00' },
  { label: 'Other', icon: FaTicketAlt, color: '#2F80ED' },
];

function BusinessType() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const categoryCards = useMemo(
    () =>
      categories.map((category) => (
        <BusinessCard
          key={category.label}
          icon={category.icon}
          label={category.label}
          color={category.color}
          active={selected === category.label}
          onClick={() => setSelected(category.label)}
        />
      )),
    [selected]
  );

  return (
    <motion.main
      className="business-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="content-panel">
        <AdminHeader />

        <motion.section
          className="cards-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          {categoryCards}
        </motion.section>

        <div className="navigation-row">
          <ProgressBar activeIndex={0} />
          <div className="footer-controls">
            <button className="text-button" type="button" aria-label="Go back" disabled>
              ← Back
            </button>

            <Button
              disabled={!selected}
              ariaLabel="Continue to next step"
              onClick={() => {
                if (selected) {
                  navigate('/info', { state: { category: selected } });
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

export default BusinessType;
