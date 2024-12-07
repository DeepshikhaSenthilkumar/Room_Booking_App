import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRoomQuantity, clearRooms } from '../utils/roomSlice.jsx'

const AddRooms = () => {
  const dispatch = useDispatch()
  const addedRooms = useSelector(state => state.rooms.addedRooms)

  if (!Object.keys(addedRooms).length) {
    return <>No rooms added yet.</>
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Added Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.values(addedRooms).map(room => (
          <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg">{room.name}</h3>
            <p>Rs.{room.price}</p>
            <button
              onClick={() => dispatch(updateRoomQuantity({ room, quantitychange: -1 }))}
              className="mt-2 bg-violet-600 text-white py-2 px-4 rounded"
            >
              Remove room ({room.quantity})
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(clearRooms())} className="bg-violet-600 text-white py-2 px-2 mt-2 rounded">
        clear All
      </button>
    </div>
  )
}

export default AddRooms
