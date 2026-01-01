import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* navbar */}
      <header>
        <nav className='flex justify-between items-center container py-4'>
          <div className="logo text-xl font-bold">CS--Ticket System</div>
          <div className='flex gap-4 items-center'>
            <ul className='flex gap-4 '>
              <li>Home</li>
              <li>FAQ</li>
              <li>Changelog</li>
              <li>Blog</li>
              <li>Download</li>
              <li>Contact</li>
            </ul>
            <button className='bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-2 py-2 rounded'><i class="fa-solid fa-plus pr-2 fa-xs"></i>New Ticket</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
