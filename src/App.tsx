import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/footer/button';
import { Header } from './components/header/header';
import { MainBlock } from './components/mainBlock/mainBlock';

const App: React.FC = () => {

  const [isComplete, setIsComplete] = useState<boolean>(false)

  return (
    <div className="App">
      <Header />
      <MainBlock setIsComplete={setIsComplete}/>
      <Footer isComplete={isComplete}/>
    </div>
  );
}

export default App;
