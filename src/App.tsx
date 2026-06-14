import { Routes, Route, Navigate } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import MoodPage from './pages/MoodPage'
import QuotesPage from './pages/QuotesPage'
import CardsPage from './pages/CardsPage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mood" element={<MoodPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </>
  )
}
