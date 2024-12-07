import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  availableRooms: [],
  addedRooms: {},
  addroomcount: 0,
}

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    // setRooms: (state, action) => {
    //   state.availableRooms = action.payload
    // },
    /*addRoom: (state, action) => {
      state.addedRooms.push(action.payload)
    },
    increment: state => {
      state.addroomcount += 1
    },*/
    updateRoomQuantity: (state, action) => {
      const { room, quantitychange } = action.payload
      const roomId = room.id

      if (state.addedRooms[roomId]) {
        state.addedRooms[roomId].quantity += quantitychange
        if (state.addedRooms[roomId].quantity <= 0) {
          delete state.addedRooms[roomId]
        }
      } else if (quantitychange > 0) {
        state.addedRooms[roomId] = { ...room, quantity: quantitychange }
      }

      state.addroomcount = Object.values(state.addedRooms).reduce((total, item) => total + item.quantity, 0)
    },
    clearRooms: state => {
      state.addedRooms = {}
      state.addroomcount = 0
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.availableRooms = action.payload
      })
      .addCase(fetchData.pending, () => {
        console.log('pending')
      })
  },
})
//https://run.mocky.io/v3/2a3c7c7d-450b-4440-96a3-9ff8183e2f2a
export const fetchData = createAsyncThunk('availableRooms/fetchData', async () => {
  const apiData = await fetch('https://run.mocky.io/v3/2a3c7c7d-450b-4440-96a3-9ff8183e2f2a')
  const resp = await apiData.json()
  return resp
})

export default roomSlice.reducer
export const { updateRoomQuantity, clearRooms } = roomSlice.actions
