import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RoomList from './components/rooms/RoomList'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import AddRooms from './components/AddRooms.jsx'
import DiscountedRooms from './components/rooms/DiscountedRooms.jsx'
import TopRatedRooms from './components/rooms/TopRatedRooms'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />}>   
            <Route path="/" element={<RoomList />} />
            <Route path="discounted" element={<DiscountedRooms/>}/>
            <Route path="top-rated" element={<TopRatedRooms/>}/>
          </Route> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-rooms" element={<AddRooms />} />
        </Routes>
      </>
      <Footer />
    </div>
  )
}

export default App
