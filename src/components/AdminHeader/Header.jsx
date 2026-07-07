function Header({ title = 'Choose Your Business Type', description = 'Select the category that best describes your business to help us tailor your dashboard experience.' }) {
  return (
    <header className="page-header" aria-labelledby="onboarding-title">
      <div className="header-copy">
        <h1 id="onboarding-title">{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}

export default Header;
