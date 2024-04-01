import './App.css'
import './assets/fonts/TRBalloon.ttf'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home';
import Login from './pages/login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App