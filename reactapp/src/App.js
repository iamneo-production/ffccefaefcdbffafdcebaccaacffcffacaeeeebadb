import React from 'react';
import './style.css';
import UrlValidator from './components/UrlValidator/UrlValidator';

function App() {
  return (
    <div style={{textalign:"center"}}>
      <h1 >Url Validator</h1>
      <UrlValidator />
    </div>
  );
}

export default App;