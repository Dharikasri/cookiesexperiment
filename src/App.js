import React from 'react';
import CookieComponent from './CookieComponent';
import ThemeComponent from './ThemeComponent'; 
import LanguageComponent from './LanguageComponent';
import './App.css';

const App = () => {
  return (
    <div>
      <CookieComponent />
      <ThemeComponent />
      <LanguageComponent />
    </div>
  );
};

export default App;
