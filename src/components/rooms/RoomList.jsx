import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRoomQuantity, fetchData } from '../../utils/roomSlice.jsx'

const RoomList = ({ filter }) => {
  //const [rooms, setRooms] = useState([])
  const dispatch = useDispatch()
  const rooms = useSelector(state => state.rooms.availableRooms)
  const addedRooms = useSelector(state => state.rooms.addedRooms)

  // const api = async () => {
  //   const apiData = await fetch('https://run.mocky.io/v3/a4ef12c0-67ff-4203-a826-d4f260c8f7b3')
  //   const resp = await apiData.json()
  //   dispatch(setRooms(resp))
  // }

  // useEffect(() => {
  //   api()
  // }, [dispatch])

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  if (!rooms?.length) {
    return (
      <div class="flex items-center justify-center">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    )
  }
  const filteredRooms = rooms.filter(room => {
    if (filter === 'discounted') {
      return room.discounted
    } else if (filter === 'top-rated') {
      return room.rating >= 4.5
    }
    return true
  })
  // const onclickbutton = (room, quantityChange) => {
  //   dispatch(updateRoomQuantity(room, quantityChange))
  // }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredRooms.map(room => {
        const addedRoom = addedRooms[room.id]
        return (
          <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src={room.imgUrl} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg">{room.name}</h3>
            <p>Rs.{room.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => dispatch(updateRoomQuantity({ room, quantitychange: -1 }))}
                disabled={!addedRoom || addedRoom.quantity === 0}
                className="bg-violet-600 text-white py-1 px-2 rounded-l disabled:opacity-50"
              >
                -
              </button>
              <span className="bg-gray-300 py-1 px-2">{addedRoom ? addedRoom.quantity : 0}</span>
              <button
                onClick={() => dispatch(updateRoomQuantity({ room, quantitychange: 1 }))}
                className="bg-violet-600 text-white py-1 px-2 rounded-r"
              >
                +
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RoomList
