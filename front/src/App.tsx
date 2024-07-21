import './App.css'
import './assets/fonts/TRBalloon.ttf'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home';
import Login from './pages/login';
import ProtectedRoute from './components/layout/protected-routes';
import AdminWrapper from './pages/admin/index/admin.wrapper';
import AdminIndexWrapper from './pages/admin/[sessionId]/admin.sessionId.wraper';
import { NEW } from './types/other';

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
                <AdminWrapper />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/:sessionId" 
            element={
              <ProtectedRoute>
                <AdminIndexWrapper />
              </ProtectedRoute>
            } 
          />
          <Route 
            path={`/utilisateurs/${NEW}`}
            element={
              <ProtectedRoute>
                <AdminIndexWrapper />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
