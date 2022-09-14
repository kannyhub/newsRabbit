import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import News from './components/News';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [mode, setMode] = useState('light')
  const [progress, setProgress] = useState(0)

  const setprogress = (progress) => {
    setProgress(progress)
  }

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
    <Router>
      <Navbar search={false} toggleMode={toggleMode} mode={mode}/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Routes>
        <Route path="/" element={<News apiKey={apiKey} progress={setprogress} key="general" category="general" />} />
        <Route path="/business" element={<News apiKey={apiKey} progress={setprogress} key="business" category="business" />} />
        <Route path="/entertainment" element={<News apiKey={apiKey} progress={setprogress} key="entertainment" category="entertainment" />} />
        <Route path="/health" element={<News apiKey={apiKey} progress={setprogress} key="health" category="health" />} />
        <Route path="/science" element={<News apiKey={apiKey} progress={setprogress} key="science" category="science" />} />
        <Route path="/sports" element={<News apiKey={apiKey} progress={setprogress} key="sports" category="sports" />} />
        <Route path="/technology" element={<News apiKey={apiKey} progress={setprogress} key="technology" category="technology" />} />
      </Routes>
    </Router>
  );
}

export default App;
