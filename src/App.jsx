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

<footer>

  <div className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10 bg-black flex justify-around">
    <nav className='w-96'>
      <h5 className='text-3xl mb-5'>CS-- Ticket System</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </nav>
  
  <nav className='flex flex-col'>
    <h6 className="footer-title text-2xl mb-5">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='flex flex-col'>
    <h6 className="footer-title text-2xl mb-5">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex flex-col'>
    <h6 className="footer-title text-2xl mb-5">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex flex-col'>
    <h6 className="footer-title text-2xl mb-5">Social</h6>
    <a className="link link-hover"><i class="fa-brands fa-x-twitter"></i> Twitter</a>
    <a className="link link-hover"><i class="fa-brands fa-instagram"></i> Instagram</a>
    <a className="link link-hover"><i class="fa-brands fa-facebook"></i> Facebook</a>
    <a className="link link-hover"><i class="fa-brands fa-github"></i> GitHub</a>
  </nav>

</div>
 <div className='bg-black text-center py-4'>© 2025 CS — Ticket System. All rights reserved.</div>
 
</footer>

{/* span footer */}




    </>
  )
}

export default App
