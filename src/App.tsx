import React from 'react';
import './App.css';
import { Footer } from './components/footer/button';
import { Header } from './components/header/header';
import { MainBlock } from './components/mainBlock/mainBlock';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <Footer />
    </div>
  );
}

export default App;
