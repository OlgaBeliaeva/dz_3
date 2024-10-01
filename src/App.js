import React from 'react';
import Rating from './components/Rating';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: '40px' }}>
        <Rating />
      </div>
      <div style={{ marginTop: '40px' }}>
        <List />
      </div>
    </div>
  );
}

export default App;