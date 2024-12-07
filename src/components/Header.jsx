import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const addroomcount = useSelector(state => state.rooms.addroomcount)
  return (
    <header className="bg-violet-600 text-white p-2 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl">Hotel Booking</h1>
      </Link>
      <nav>
        <button onClick={() => navigate('/about')} className="bg-white text-violet-600 py-2 px-2 mr-6 rounded">
          About
        </button>
        <button onClick={() => navigate('/contact')} className="bg-white text-violet-600 py-2 px-2 mr-6 rounded">
          Contact
        </button>
        <button onClick={() => navigate('/add-rooms')} className="bg-white text-violet-600 py-2 px-2 rounded">
          Added Rooms ({addroomcount})
        </button>
      </nav>
    </header>
  )
}

export default Header
