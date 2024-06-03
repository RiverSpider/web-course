import React, { useState, useEffect } from 'react';
import i18n from './../../assets/locales/i18n';
import classes from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage).then(() => {
      setLanguage(newLanguage);
      console.log('Language changed to', newLanguage);
    });
  };

  useEffect(() => {
    i18n.on('languageChanged', setLanguage);
    return () => {
      i18n.off('languageChanged', setLanguage);
    };
  }, []);

  return (
    <div className={classes.button} onClick={toggleLanguage}>
      {language === 'en' ? 'EN' : 'RU'}
    </div>
  );
};

export default LanguageSwitcher;
