import React from "react";
import { useDispatch } from "react-redux";
// import { deleteTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    // dispatch(deleteTuit(id));
    dispatch(deleteTuitThunk(id));

  }
  return (
  <li className="list-group-item">
    <div className="row">
      <div className="col-auto">
        <img className="rounded-circle" height={48} width={48} src={tuit.image}/>
      </div>

      <div className="col-10">
        <i className="bi bi-x-lg float-end"
           onClick={() => deleteTuitHandler(tuit._id)}></i>

        <div><span className="fw-bolder">{tuit.userName}</span>
          <i className="bi bi-check-circle-fill text-primary m-2"></i>
          {tuit.handle} • {tuit.time}
        </div>

        <div>{tuit.tuit}</div>

        <TuitStats tuit={tuit}/>
      </div>
    </div>
  </li>
)
  ;
};
export default TuitItem;

