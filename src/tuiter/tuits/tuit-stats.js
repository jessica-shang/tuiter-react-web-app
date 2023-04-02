import React from "react";
import {useDispatch} from "react-redux";
import { updateTuitLikes } from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const updateTuitLikesHandler = (id) => {
    dispatch(updateTuitLikes(id));
  }

  return (
      <div className="row d-flex justify-content-center">
        <div className="col">
          <i className="bi bi-chat"/> {tuit.replies}
        </div>
        <div className="col">
          <i className="bi bi-arrow-repeat"/> {tuit.retuits}
        </div>
        <div className="col">
          <i onClick={() => dispatch(updateTuitThunk({
                                                       ...tuit,
                                                       likes: tuit.likes + 1
                                                     }))} className="bi bi-heart-fill me-2 text-danger"/>
          <span> {tuit.likes}</span>
        </div>
        <div className="col">
          <i onClick={() => dispatch(updateTuitThunk({
                                                       ...tuit,
                                                       dislikes: tuit.dislikes + 1
                                                     }))} className="bi bi-hand-thumbs-down-fill me-2"/>
          <span> {tuit.dislikes}</span>
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  );
};
export default TuitStats
