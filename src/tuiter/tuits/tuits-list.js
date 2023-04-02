import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitsList = () => {
  // grab tuits and loading flag from reducer
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => { // on component load
    dispatch(findTuitsThunk())
  }, [])

  return(
      <ul className="list-group">
        {
            loading && // if loading flag is true
            <li className="list-group-item"> // show a loading message while data is still coming back from server
              Loading...
            </li>
        }
        {
          tuits.map(tuit =>
                             <TuitItem
                                 key={tuit._id}
                                 tuit={tuit}
                             />
          )
        }
      </ul>
  );
};
export default TuitsList;