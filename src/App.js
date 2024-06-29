import React from 'react';
import './App.css';
import BusinessCard from './BusinessCard';

function App() {
  return (
    <div className="App">
      <BusinessCard
        about="hi, this section is about me"
        contact="hi, this is how you can contact me"
        experience="hi, this section is about my experience"
      />
    </div>
  );
}

export default App;