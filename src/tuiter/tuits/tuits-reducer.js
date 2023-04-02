import { createSlice } from "@reduxjs/toolkit";
// import tuits from './tuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk}
  from "../../services/tuits-thunks";

const initialState = { // initial state has no tuits
  tuits: [],
  loading: false // loading flag to display spinner
}

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "/images/nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
                                 name: 'tuits',
                                 initialState,
                                 extraReducers: { // async reducers
                                   [findTuitsThunk.pending]: // if request is not yet fulfilled
                                       (state) => {
                                         state.loading = true // set loading true to display spinner
                                         state.tuits = [] // tuits are still empty
                                       },
                                   [findTuitsThunk.fulfilled]: // when we get response, request is fulfilled
                                       (state, { payload }) => { // extra/destruct payload from action object
                                         state.loading = false // turn off loading flag
                                         state.tuits = payload // payload has tuits from server & update redux state
                                       },
                                   [findTuitsThunk.rejected]: // respond with error if request times out
                                       (state, action) => {
                                         state.loading = false // reset loading flag
                                         state.error = action.error // report error
                                       },
                                   [deleteTuitThunk.fulfilled] :
                                       (state, { payload }) => {
                                         state.loading = false
                                         state.tuits = state.tuits
                                             .filter(t => t._id !== payload)
                                       },
                                   [createTuitThunk.fulfilled]:
                                       (state, { payload }) => {
                                         state.loading = false
                                         state.tuits.push(payload)
                                       },
                                   [updateTuitThunk.fulfilled]:
                                       (state, { payload }) => {
                                         state.loading = false
                                         const tuitNdx = state.tuits
                                             .findIndex((t) => t._id === payload._id)
                                         state.tuits[tuitNdx] = {
                                           ...state.tuits[tuitNdx],
                                           ...payload
                                         }
                                       }
                                 },

                                 reducers: { // OLD FROM LAST A7
                                   deleteTuit(state, action) {
                                     const index = state
                                         .findIndex(tuit =>
                                                        tuit._id === action.payload);
                                     state.splice(index, 1);
                                   },

                                   createTuit(state, action) {
                                     state.unshift({
                                                     ...action.payload,
                                                     ...templateTuit,
                                                     _id: (new Date()).getTime(),
                                                   })
                                   },
                                   updateTuitLikes(state, action) {
                                     const tuit = state.find(tuit => tuit._id === action.payload);
                                     if (tuit.liked) {
                                       tuit.liked = false;
                                       tuit.likes--;
                                     } else {
                                       tuit.liked = true;
                                       tuit.likes++;
                                     }
                                   }
                                 }
                               });

export const {createTuit, deleteTuit, updateTuitLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;