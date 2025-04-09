import { useTranslation } from 'react-i18next';

const CompanyContent = () => {
  const { t } = useTranslation();

  return (
    <div className="company-content">
      <h1>{t('company.name')}</h1>
      <p className="tagline">{t('company.tagline')}</p>
      
      <section className="about-section">
        <h2>{t('company.about.title')}</h2>
        <p>{t('company.about.description')}</p>
      </section>

      <section className="services-section">
        <h2>{t('company.services.title')}</h2>
        <ul className="services-list">
          <li>{t('company.services.list.web')}</li>
          <li>{t('company.services.list.mobile')}</li>
          <li>{t('company.services.list.cloud')}</li>
          <li>{t('company.services.list.ai')}</li>
          <li>{t('company.services.list.consulting')}</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>{t('company.contact.title')}</h2>
        <div className="contact-info">
          <p><strong>{t('company.contact.email')}:</strong> contact@sekeltech.com</p>
          <p><strong>{t('company.contact.phone')}:</strong> +1 (555) 123-4567</p>
          <p><strong>{t('company.contact.address')}:</strong> 123 Tech Street, Silicon Valley, CA</p>
          <button className="contact-button">{t('company.contact.getInTouch')}</button>
        </div>
      </section>
    </div>
  );
};

export default CompanyContent; 