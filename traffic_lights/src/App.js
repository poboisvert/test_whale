import './App.css';
import React from 'react';
import Traffic from '../src/components/traffic';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        width: '700px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Traffic />
    </div>
  );
};

export default App;
