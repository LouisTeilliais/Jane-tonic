import './App.css'
import './assets/fonts/TRBalloon.ttf'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAdmin from '../auth/pages/Login'
import AppView from './Pages/AppView/AppView';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppView/>}/>
          <Route path="/admin" element={<LoginAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App