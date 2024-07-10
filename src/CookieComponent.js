import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const CookieComponent = () => {
  const [name, setName] = useState('');
  const [cookieName, setCookieName] = useState('');

  const setCookie = () => {
    Cookies.set('username', name, { expires: 7 }); 
    console.log(`Cookie set: username=${name}`); 
    setCookieName(name);
  };

  useEffect(() => {
    const cookie = Cookies.get('username');
    console.log(`Cookie retrieved: username=${cookie}`); 
    if (cookie) {
      setCookieName(cookie);
    }
  }, []);

  return (
    <div>
      <h1>React Cookie Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={setCookie}>Set Cookie</button>
      {cookieName && <p>Cookie value: {cookieName}</p>}
    </div>
  );
};

export default CookieComponent;
