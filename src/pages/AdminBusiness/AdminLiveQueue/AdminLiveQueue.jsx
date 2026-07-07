import { useSidebar } from '../../../context/SidebarContext';
import './AdminLiveQueue.css';

const WaitingPeopleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 17.2C1 16.6334 1.146 16.1127 1.438 15.638C1.73 15.1634 2.11733 14.8007 2.6 14.55C3.63333 14.0334 4.68333 13.646 5.75 13.388C6.81667 13.13 7.9 13.0007 9 13C10.1 12.9994 11.1833 13.1287 12.25 13.388C13.3167 13.6474 14.3667 14.0347 15.4 14.55C15.8833 14.8 16.271 15.1627 16.563 15.638C16.855 16.1134 17.0007 16.634 17 17.2V18C17 18.55 16.8043 19.021 16.413 19.413C16.0217 19.805 15.5507 20.0007 15 20H3C2.45 20 1.97933 19.8044 1.588 19.413C1.19667 19.0217 1.00067 18.5507 1 18V17.2ZM18.45 20C18.6333 19.7 18.771 19.3794 18.863 19.038C18.955 18.6967 19.0007 18.3507 19 18V17C19 16.2667 18.796 15.5624 18.388 14.887C17.98 14.2117 17.4007 13.6327 16.65 13.15C17.5 13.25 18.3 13.421 19.05 13.663C19.8 13.905 20.5 14.2007 21.15 14.55C21.75 14.8834 22.2083 15.254 22.525 15.662C22.8417 16.07 23 16.516 23 17V18C23 18.55 22.8043 19.021 22.413 19.413C22.0217 19.805 21.5507 20.0007 21 20H18.45ZM6.175 10.825C5.39167 10.0417 5 9.10003 5 8.00003C5 6.90003 5.39167 5.95836 6.175 5.17503C6.95833 4.39169 7.9 4.00003 9 4.00003C10.1 4.00003 11.0417 4.39169 11.825 5.17503C12.6083 5.95836 13 6.90003 13 8.00003C13 9.10003 12.6083 10.0417 11.825 10.825C11.0417 11.6084 10.1 12 9 12C7.9 12 6.95833 11.6084 6.175 10.825ZM17.825 10.825C17.0417 11.6084 16.1 12 15 12C14.8167 12 14.5833 11.9794 14.3 11.938C14.0167 11.8967 13.7833 11.8507 13.6 11.8C14.05 11.2667 14.396 10.675 14.638 10.025C14.88 9.37503 15.0007 8.70003 15 8.00003C14.9993 7.30003 14.8787 6.62503 14.638 5.97503C14.3973 5.32503 14.0513 4.73336 13.6 4.20003C13.8333 4.11669 14.0667 4.06236 14.3 4.03703C14.5333 4.01169 14.7667 3.99936 15 4.00003C16.1 4.00003 17.0417 4.39169 17.825 5.17503C18.6083 5.95836 19 6.90003 19 8.00003C19 9.10003 18.6083 10.0417 17.825 10.825Z" fill="#EA580C"/>
  </svg>
);

const NextUpPersonIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8333 4.0625C9.75589 4.0625 8.72258 4.49051 7.96071 5.25238C7.19884 6.01425 6.77083 7.04756 6.77083 8.125C6.77083 9.20244 7.19884 10.2358 7.96071 10.9976C8.72258 11.7595 9.75589 12.1875 10.8333 12.1875C11.9108 12.1875 12.9441 11.7595 13.706 10.9976C14.4678 10.2358 14.8958 9.20244 14.8958 8.125C14.8958 7.04756 14.4678 6.01425 13.706 5.25238C12.9441 4.49051 11.9108 4.0625 10.8333 4.0625ZM6.5 14.3542C5.42256 14.3542 4.38925 14.7822 3.62738 15.544C2.86551 16.3059 2.4375 17.3392 2.4375 18.4167V19.7037C2.4375 20.5205 3.029 21.216 3.835 21.3471C6.22917 21.7382 8.64825 21.9278 11.0673 21.9148C11.2363 21.9137 11.3382 21.7263 11.2558 21.5789C10.6217 20.4476 10.2896 19.172 10.2917 17.875C10.2917 17.0224 10.4325 16.2023 10.6925 15.4375C10.7037 15.4037 10.707 15.3677 10.702 15.3325C10.6971 15.2972 10.684 15.2635 10.6639 15.2342C10.6437 15.2048 10.617 15.1805 10.5859 15.1631C10.5548 15.1458 10.5201 15.1359 10.4845 15.1342C9.7744 15.1022 9.07185 14.9747 8.39583 14.755L7.45767 14.4473C7.26751 14.3863 7.06911 14.3549 6.86942 14.3542H6.5ZM18.6875 16.25C18.6875 16.0345 18.6019 15.8279 18.4495 15.6755C18.2972 15.5231 18.0905 15.4375 17.875 15.4375C17.6595 15.4375 17.4528 15.5231 17.3005 15.6755C17.1481 15.8279 17.0625 16.0345 17.0625 16.25V18.1708C17.0625 18.4308 17.1871 18.6745 17.3972 18.8273L18.4806 19.6159C18.655 19.7426 18.8726 19.7949 19.0855 19.7611C19.2984 19.7274 19.4892 19.6105 19.6159 19.4361C19.7426 19.2617 19.7949 19.0441 19.7611 18.8312C19.7274 18.6183 19.6105 18.4275 19.4361 18.3007L18.6875 17.7569V16.25Z" fill="#9333EA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8753 23.8332C19.4556 23.8332 20.9711 23.2054 22.0885 22.088C23.2059 20.9706 23.8337 19.4551 23.8337 17.8748C23.8337 16.2946 23.2059 14.7791 22.0885 13.6617C20.9711 12.5443 19.4556 11.9165 17.8753 11.9165C16.2951 11.9165 14.7796 12.5443 13.6621 13.6617C12.5447 14.7791 11.917 16.2946 11.917 17.8748C11.917 19.4551 12.5447 20.9706 13.6621 22.088C14.7796 23.2054 16.2951 23.8332 17.8753 23.8332ZM17.8753 22.2082C19.0246 22.2082 20.1268 21.7516 20.9395 20.939C21.7521 20.1263 22.2087 19.0241 22.2087 17.8748C22.2087 16.7256 21.7521 15.6234 20.9395 14.8107C20.1268 13.9981 19.0246 13.5415 17.8753 13.5415C16.7261 13.5415 15.6239 13.9981 14.8112 14.8107C13.9985 15.6234 13.542 16.7256 13.542 17.8748C13.542 19.0241 13.9985 20.1263 14.8112 20.939C15.6239 21.7516 16.7261 22.2082 17.8753 22.2082Z" fill="#9333EA"/>
  </svg>
);

const ServingPersonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8337 4.1665V5.83317M10.8337 14.1665V15.8332M10.8337 9.1665V10.8332M1.66699 7.49984C2.33003 7.49984 2.96592 7.76323 3.43476 8.23207C3.9036 8.70091 4.16699 9.3368 4.16699 9.99984C4.16699 10.6629 3.9036 11.2988 3.43476 11.7676C2.96592 12.2364 2.33003 12.4998 1.66699 12.4998V14.1665C1.66699 14.6085 1.84259 15.0325 2.15515 15.345C2.46771 15.6576 2.89163 15.8332 3.33366 15.8332H16.667C17.109 15.8332 17.5329 15.6576 17.8455 15.345C18.1581 15.0325 18.3337 14.6085 18.3337 14.1665V12.4998C17.6706 12.4998 17.0347 12.2364 16.5659 11.7676C16.0971 11.2988 15.8337 10.6629 15.8337 9.99984C15.8337 9.3368 16.0971 8.70091 16.5659 8.23207C17.0347 7.76323 17.6706 7.49984 18.3337 7.49984V5.83317C18.3337 5.39114 18.1581 4.96722 17.8455 4.65466C17.5329 4.3421 17.109 4.1665 16.667 4.1665H3.33366C2.89163 4.1665 2.46771 4.3421 2.15515 4.65466C1.84259 4.96722 1.66699 5.39114 1.66699 5.83317V7.49984Z" stroke="#1089D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.33333 5.33334V11.3333M8 5.33334V11.3333M10.6667 5.33334V11.3333M2.66667 3.99999H4.66667H13.3333M5.33333 3.99999V2.66666C5.33333 2.2984 5.63173 2 6 2H10C10.3683 2 10.6667 2.2984 10.6667 2.66666V3.99999M12.6667 3.99999V13.3333C12.6667 13.7016 12.3683 14 12 14H4C3.63173 14 3.33333 13.7016 3.33333 13.3333V3.99999H12.6667Z" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompletedPeopleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C11.8229 19.974 13.4896 19.5312 15 18.6719C16.5104 17.7865 17.7344 16.5625 18.6719 15C19.5573 13.4115 20 11.7448 20 10C20 8.25521 19.5573 6.58854 18.6719 5C17.7344 3.4375 16.5104 2.21354 15 1.32812C13.4896 0.46875 11.8229 0.0260417 10 0C8.17708 0.0260417 6.51042 0.46875 5 1.32812C3.48958 2.21354 2.26562 3.4375 1.32812 5C0.442708 6.58854 0 8.25521 0 10C0 11.7448 0.442708 13.4115 1.32812 15C2.26562 16.5625 3.48958 17.7865 5 18.6719C6.51042 19.5312 8.17708 19.974 10 20ZM14.4141 8.16406L9.41406 13.1641C8.97135 13.5286 8.52865 13.5286 8.08594 13.1641L5.58594 10.6641C5.22135 10.2214 5.22135 9.77865 5.58594 9.33594C6.02865 8.97135 6.47135 8.97135 6.91406 9.33594L8.75 11.1719L13.0859 6.83594C13.5286 6.47135 13.9714 6.47135 14.4141 6.83594C14.7786 7.27865 14.7786 7.72135 14.4141 8.16406Z" fill="#22C55E"/>
  </svg>
);

const QueueBadge = ({ text, variant }) => (
  <span className={`queue-badge ${variant}`}>{text}</span>
);

function LiveQueue() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="page-admin-container">
      <div className={`page-inner-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="page-content">
          <section className="live-queue-page">
            <div className="live-queue-header">
              <div className="live-queue-header-top">
                <div>
                  <h1>Live Queue Management</h1>
                  <div className="live-queue-meta">
                    <span className="meta-label">General OPD Queue</span>
                    <QueueBadge text="Open" variant="open" />
                    <span className="meta-divider" />
                    <span className="meta-timestamp">09:41 AM, Wed 22 May 2026</span>
                  </div>
                </div>
                <button type="button" className="primary-button">+ Create New Token</button>
              </div>

              <div className="live-queue-summary-strip">
                <div className="summary-item summary-item--waiting">
                  <div className="summary-icon orange"><WaitingPeopleIcon /></div>
                  <div className="summary-item-values">
                    <p>Waiting</p>
                    <strong>86</strong>
                    <span>People</span>
                  </div>
                </div>
              
                <div className="summary-item">
                  <div className="summary-icon violet"><NextUpPersonIcon /></div>
                  <div className="summary-item-values">
                    <p>Next Up</p>
                    <strong>2</strong>
                    <span>Person</span>
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-icon blue"><ServingPersonIcon /></div>
                  <div className="summary-item-values">
                    <p>Serving</p>
                    <strong>1</strong>
                    <span>Person</span>
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-icon green"><CompletedPeopleIcon /></div>
                  <div className="summary-item-values">
                    <p>Completed</p>
                    <strong>1138</strong>
                    <span>People</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="queue-board">
              <div className="queue-column waiting-column">
                <div className="queue-column-header orange">
                  <div className="queue-column-title">
                    <span className="queue-column-icon orange"><WaitingPeopleIcon /></span>
                    Waiting
                  </div>
                  <span>(86)</span>
                </div>
                <div className="queue-card list-card">
                  <div className="queue-card-heading">
                    <span className="card-icon small orange"><WaitingPeopleIcon /></span>
                    <p className="token-number">A129</p>
                  </div>
                  <p className="token-name">John Kumar</p>
                  <p className="token-meta">Waiting for 12 min</p>
                </div>
                <div className="queue-card list-card">
                  <div className="queue-card-heading">
                    <span className="card-icon small orange"><WaitingPeopleIcon /></span>
                    <p className="token-number">A130</p>
                  </div>
                  <p className="token-name">Ravi Shankar</p>
                  <p className="token-meta">Waiting for 9 min</p>
                </div>
                <div className="queue-card list-card">
                  <div className="queue-card-heading">
                    <span className="card-icon small orange"><WaitingPeopleIcon /></span>
                    <p className="token-number">A131</p>
                  </div>
                  <p className="token-name">Priya Nair</p>
                  <p className="token-meta">Waiting for 5 min</p>
                </div>
                <div className="queue-card list-card">
                  <div className="queue-card-heading">
                    <span className="card-icon small orange"><WaitingPeopleIcon /></span>
                    <p className="token-number">A132</p>
                  </div>
                  <p className="token-name">Mohammed Ali</p>
                  <p className="token-meta">Waiting for 3 min</p>
                </div>
                <button type="button" className="link-button">View All Waiting (86)</button>
              </div>

              <div className="queue-column highlighted-column violet-column">
                <div className="queue-column-header violet">
                  <div className="queue-column-title">
                    <span className="queue-column-icon violet"><NextUpPersonIcon /></span>
                    Next Up
                  </div>
                  <span>(2)</span>
                </div>
                <div className="queue-card next-card">
                  <div className="queue-card-heading spaced">
                    <p className="token-number">A128</p>
                    <button type="button" className="icon-button"><TrashIcon /></button>
                  </div>
                  <p className="token-name">Suresh Babu</p>
                  <p className="token-meta">+91 85468 32584</p>
                  <div className="card-actions">
                    <button type="button" className="small-button outline">Hold</button>
                    <button type="button" className="small-button filled blue">Notify</button>
                  </div>
                  <button type="button" className="secondary-button">Next</button>
                </div>
                <div className="queue-card next-card">
                  <div className="queue-card-heading spaced">
                    <p className="token-number">A129</p>
                    <button type="button" className="icon-button"><TrashIcon /></button>
                  </div>
                  <p className="token-name">John Kumar</p>
                  <p className="token-meta">+91 75845 25486</p>
                  <div className="card-actions">
                    <button type="button" className="small-button outline">Hold</button>
                    <button type="button" className="small-button filled blue">Notify</button>
                  </div>
                  <button type="button" className="secondary-button">Next</button>
                </div>
              </div>

              <div className="queue-column blue-column">
                <div className="queue-column-header blue">
                  <div className="queue-column-title">
                    <span className="queue-column-icon blue"><ServingPersonIcon /></span>
                    Serving
                  </div>
                  <span>(1)</span>
                </div>
                <div className="queue-card active-card serving-card">
                  <div className="serving-card-top">
                    <p className="token-number">A127</p>
                    <span className="serving-dot">•</span>
                  </div>
                  <p className="token-name">Lakshmi Devi</p>
                  <p className="token-meta">+91 65782 95487</p>
                  <div className="serve-status">Started 4 min ago</div>
                  <div className="serving-actions">
                    <button type="button" className="small-button outline">Back</button>
                    <button type="button" className="primary-outline-button">Complete</button>
                  </div>
                </div>
              </div>

              <div className="queue-column green-column">
                <div className="queue-column-header green">
                  <div className="queue-column-title">
                    <span className="queue-column-icon green"><CompletedPeopleIcon /></span>
                    Completed
                  </div>
                </div>
                <div className="queue-card completed-card">
                  <div className="completed-row">
                    <div>
                      <p className="token-number">A126</p>
                      <p className="token-name">Ramesh Kumar</p>
                      <p className="token-meta">2 mins ago</p>
                    </div>
                    <span className="check-icon"><CompletedPeopleIcon /></span>
                  </div>
                </div>
                <div className="queue-card completed-card">
                  <div className="completed-row">
                    <div>
                      <p className="token-number">A125</p>
                      <p className="token-name">Anitha Rao</p>
                      <p className="token-meta">5 mins ago</p>
                    </div>
                    <span className="check-icon"><CompletedPeopleIcon /></span>
                  </div>
                </div>
                <div className="queue-card completed-card">
                  <div className="completed-row">
                    <div>
                      <p className="token-number">A124</p>
                      <p className="token-name">Vikram Singh</p>
                      <p className="token-meta">8 mins ago</p>
                    </div>
                    <span className="check-icon"><CompletedPeopleIcon /></span>
                  </div>
                </div>
                <div className="queue-card completed-card">
                  <div className="completed-row">
                    <div>
                      <p className="token-number">A123</p>
                      <p className="token-name">Deepak Verma</p>
                      <p className="token-meta">10 mins ago</p>
                    </div>
                    <span className="check-icon"><CompletedPeopleIcon /></span>
                  </div>
                </div>
                <button type="button" className="link-button">View All Completed</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LiveQueue;
