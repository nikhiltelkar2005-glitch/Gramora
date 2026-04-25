import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Sidebar, RightSidebar } from './components'
import Home from './pages/Home'

function App() {

  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <RightSidebar />
    </div>
  )
}

export default App
