import React from 'react';
import './App.css';
import Header from './components/Header';
import ThemeProvider from './styles/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
