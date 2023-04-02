import {createAsyncThunk} // wraps an async HTTP function so that it can interact w/Redux reducer
  from "@reduxjs/toolkit"
import * as service
  from "./tuits-service"

// thunk for findTuits
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => // give unique name that thunk invokes
        await service.findTuits() // service function, returned data goes in redux action's payload
)

// thunk for deleteTuits
export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
    })

// thunk for createTuits
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
  const newTuit = await service.createTuit(tuit)
  return newTuit
})

// thunk for updateTuit
export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit', // unique identifier
        async (tuit) => // accepts updated tuit
            await service.updateTuit(tuit) // sends updated tuit to server w/service
    )



