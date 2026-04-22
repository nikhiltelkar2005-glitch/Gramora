import './App.css'
import { Sidebar, RightSidebar } from './components'

function App() {

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <h1>Gramora Feed</h1>
      </main>
      <RightSidebar />
    </div>
  )
}

export default App
