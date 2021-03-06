import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import ThemeProvider from './styles/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
        <Banner />
      </div>
    </ThemeProvider>
  );
}

export default App;
