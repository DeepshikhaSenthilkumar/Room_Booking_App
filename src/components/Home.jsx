import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl  flex items-center justify-center mb-4">Available Rooms</h2>
      <nav className="flex items-center justify-center mb-4">
        <Link
          to="discounted"
          className="bg-violet-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white py-1 px-2 mr-4 rounded "
        >
          Discounted Rooms
        </Link>
        <Link
          to="top-rated"
          className="bg-violet-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white py-1 px-2 mr-4 rounded "
        >
          Top-rated Rooms
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
