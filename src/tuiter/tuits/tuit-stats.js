import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitLikes } from "./tuits-reducer";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const updateTuitLikesHandler = (id) => {
    dispatch(updateTuitLikes(id));
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
          <span onClick={() => updateTuitLikesHandler(tuit._id)}>
            {tuit.liked && <i className="bi bi-heart-fill text-danger"></i>}
            {!tuit.liked && <i className="bi bi-heart"></i>}
            <span className="m-2">{tuit.likes}</span>
          </span>
        </div>

        <div>
          <i className="bi bi-share"></i>
        </div>
      </div>
      )
}
export default TuitStats
