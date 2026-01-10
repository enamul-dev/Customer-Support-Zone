import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicketList from "./TicketList";
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
            <button className='bg-linear-to-r from-indigo-500 to-indigo-600 text-white px-2 py-2 rounded'><i class="fa-solid fa-plus pr-2 fa-xs"></i>New Ticket</button>
          </div>
        </nav>
      </header>

      {/* In progress and Resolved section */}

      <section>
        <div className='flex flex-col md:flex-row container justify-between gap-7 py-16'>
          <div className='bg-linear-to-r from-indigo-400 to-indigo-600 text-white rounded w-200 h-63 flex flex-col justify-center items-center relative ' >
            <div
                className="absolute inset-0 bg-no-repeat bg-auto"
                style={{ backgroundImage: "url('/vector1.png')" }}
              ></div>
              <div
                className="absolute inset-0 bg-no-repeat bg-auto  scale-x-[-1]"
                style={{ backgroundImage: "url('/vector1.png')" }}
              ></div>
          
            <h1 className='text-2xl'>In-Progress</h1>
            <p className='text-4xl'>0</p>
          </div>
          <div className='bg-linear-to-r from-green-400 to-green-600 text-white  rounded w-200 h-63 flex flex-col justify-center items-center relative'>
            <div
                className="absolute inset-0 bg-no-repeat bg-auto"
                style={{ backgroundImage: "url('/vector1.png')" }}
              ></div>
              <div
                className="absolute inset-0 bg-no-repeat bg-auto  scale-x-[-1]"
                style={{ backgroundImage: "url('/vector1.png')" }}
              ></div>
            <h1 className='text-2xl'>Resolved</h1>
            <p className='text-4xl'>0</p>
        </div>
        </div>
      </section>

      <section className='container '>
        <TicketList />;
        
      </section>

    </>
  )
}

export default App
