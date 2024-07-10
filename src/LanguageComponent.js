import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const LanguageComponent = () => {
  const [language, setLanguage] = useState('en');
  const [cookieLanguage, setCookieLanguage] = useState('');

  // Set the language cookie
  const setLanguageCookie = (selectedLanguage) => {
    Cookies.set('language', selectedLanguage, { expires: 7 }); // Expires in 7 days
    console.log(`Language cookie set: language=${selectedLanguage}`);
    setLanguage(selectedLanguage);
    setCookieLanguage(selectedLanguage);
  };

  // Get the language cookie
  useEffect(() => {
    const cookie = Cookies.get('language');
    console.log(`Language cookie retrieved: language=${cookie}`);
    if (cookie) {
      setLanguage(cookie);
      setCookieLanguage(cookie);
    }
  }, []);

  return (
    <div>
      <h1>React Language Preference Example</h1>
      <div>
        <button onClick={() => setLanguageCookie('en')}>English</button>
        <button onClick={() => setLanguageCookie('es')}>Spanish</button>
        <button onClick={() => setLanguageCookie('fr')}>French</button>
      </div>
      <p>Current language: {language}</p>
      {cookieLanguage && <p>Cookie language: {cookieLanguage}</p>}
      <div style={{ marginTop: '20px' }}>
        {language === 'en' && <p>This is an English message.</p>}
        {language === 'es' && <p>Este es un mensaje en español.</p>}
        {language === 'fr' && <p>Ceci est un message en français.</p>}
      </div>
    </div>
  );
};

export default LanguageComponent;
