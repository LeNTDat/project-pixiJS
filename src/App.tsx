import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from './app/DashBoardPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<p>Không tìm thấy trang.</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
