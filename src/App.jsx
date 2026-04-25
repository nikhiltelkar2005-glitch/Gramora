import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Sidebar, RightSidebar } from './components'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
      <RightSidebar />
    </div>
  )
}

export default App
