import React from "react";
import { useDispatch } from "react-redux";
// import { updateTuitLikes } from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const updateLikesHandler = () => {
    const updatedTuit = {
      ...tuit,
      likes : tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
      liked : !tuit.liked
    };
    dispatch(updateTuitThunk(updatedTuit))
  }

  const updateDislikesHandler = () => {
    const updatedTuit = {
      ...tuit,
      dislikes : tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
      disliked : !tuit.disliked
    };
    dispatch(updateTuitThunk(updatedTuit))
  }

  return(
      <div className="d-flex justify-content-between">

        <div>
          <i className="bi bi-chat"></i>
          <span className="m-2">{tuit.replies}</span>
        </div>

        <div>
          <i className="bi bi-arrow-repeat"></i>
          <span className="m-2">{tuit.retuits}</span>
        </div>

        <div>
         <span onClick={updateLikesHandler}>
            {tuit.liked && <i className="bi bi-heart-fill text-danger"></i>}
           {!tuit.liked && <i className="bi bi-heart"></i>}
           <span className="m-2">{tuit.likes}</span>
          </span>
        </div>

        <div>
          <span onClick={updateDislikesHandler}>
            {tuit.disliked && <i className="bi bi-hand-thumbs-down-fill"></i>}
            {!tuit.disliked && <i className="bi bi-hand-thumbs-down"></i>}
            <span className="m-2">{tuit.dislikes}</span>
          </span>
        </div>

        <div>
          <i className="bi bi-share"></i>
        </div>
      </div>
  )
}
export default TuitStats