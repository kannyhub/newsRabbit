import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import News from './components/News';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(1 25 38)';
      let cards = document.querySelectorAll('.card')
      Array.from(cards).forEach((e)=>{
          e.style.backgroundColor = '#001634'
        })
      document.body.style.color = '#00dfdff7';
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      let cards = document.querySelectorAll('.card')
      Array.from(cards).forEach((e)=>{
          e.style.backgroundColor = '#fff'
        })
      document.body.style.color = '#000';
    }
  }
  return (
    <>
      <Navbar search={false} toggleMode={toggleMode} mode={mode}/>
      <News/>
    </>
  );
}

export default App;
