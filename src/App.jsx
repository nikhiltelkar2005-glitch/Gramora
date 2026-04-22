import './App.css'
import { Sidebar, RightSidebar, Story, Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10 } from './components'

function App() {

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Story />
        <Post1 />
        <Post2 />
        <Post3 />
        <Post4 />
        <Post5 />
        <Post6 />
        <Post7 />
        <Post8 />
        <Post9 />
        <Post10 />
      </main>
      <RightSidebar />
    </div>
  )
}

export default App
