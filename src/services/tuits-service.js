import axios from 'axios'; // programmatically send & receive HTTP requests
// const TUITS_API = 'http://localhost:4000/api/tuits'; // location of HTTP services
// const TUITS_API = 'https://tuiter-node-server-app-cs1234-sp23.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const findTuits = async () => { // async tags this function as asynchronous
  const response = await axios.get(TUITS_API); // send HTTP GET request to TUITS_API
  const tuits = response.data; // extract JSON array from response from server
  return tuits; // return tuits
}

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit)
  return response.data;
}

export const deleteTuit = async (tid) => {
  const response = await axios // send HTTP DELETE request to server
      .delete(`${TUITS_API}/${tid}`) // append tuit's ID to URL
  return response.data // data contains response's status we'll ignore for now
}

export const updateTuit = async (tuit) => {
  // send HTTP PUT response appending tuit's ID to URL
  // embed TUIT object in BODY
  // return tuit update to update in reducer's state's store
  const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}

