import './style.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import VideoP from './components/VideoP'

function App() {
  return (
    <>
      <Routes>
        <Route path='/rexhub' element={<Home />} />
        <Route path='/videoplayer' element={<VideoP />} />
      </Routes>
    </>
  );
}

export default App;
