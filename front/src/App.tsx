import './App.css'
import './assets/fonts/TRBalloon.ttf'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home';
import Login from './pages/login';
import ProtectedRoute from './components/layout/protected-routes';
import Admin from './pages/admin/admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
