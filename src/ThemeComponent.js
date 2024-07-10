
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ThemeComponent = () => {
  const [theme, setTheme] = useState('light');
  const [cookieTheme, setCookieTheme] = useState('');

  // Set the theme cookie
  const setThemeCookie = (selectedTheme) => {
    Cookies.set('theme', selectedTheme, { expires: 7 }); // Expires in 7 days
    console.log(`Theme cookie set: theme=${selectedTheme}`);
    setTheme(selectedTheme);
    setCookieTheme(selectedTheme);
  };

  // Get the theme cookie
  useEffect(() => {
    const cookie = Cookies.get('theme');
    console.log(`Theme cookie retrieved: theme=${cookie}`);
    if (cookie) {
      setTheme(cookie);
      setCookieTheme(cookie);
    }
  }, []);

  return (
    <div>
      <h1>React Theme Preference Example</h1>
      <div>
        <button onClick={() => setThemeCookie('light')}>Light Theme</button>
        <button onClick={() => setThemeCookie('dark')}>Dark Theme</button>
      </div>
      <p>Current theme: {theme}</p>
      {cookieTheme && <p>Cookie theme: {cookieTheme}</p>}
      <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000', padding: '20px', marginTop: '20px' }}>
        This is a {theme} themed box.
      </div>
    </div>
  );
};

export default ThemeComponent;
