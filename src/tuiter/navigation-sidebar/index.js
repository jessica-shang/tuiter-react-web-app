import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group mb-1">
        <a className={"list-group-item"}><i
            className="fa-brands fa-twitter"/><span
            className="d-none d-xl-inline"> Tuiter</span></a>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}><i
            className="fa-solid fa-house-chimney"/><span
            className="d-none d-xl-inline"> Home</span></Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active'
                                                                                      : ''}`}><i
            className="fa-solid fa-hashtag"/><span
            className="d-none d-xl-inline"> Explore</span></Link>
        <a className={`list-group-item ${active === 'notifications' ? 'active'
                                                                    : ''}`}> <i
            className="fa-solid fa-bell"/><span
            className="d-none d-xl-inline"> Notifications</span></a>
        <a className={`list-group-item ${active === 'messages' ? 'active'
                                                               : ''}`}><i
            className="fa-solid fa-envelope"/><span
            className="d-none d-xl-inline"> Messages</span></a>
        <a className={`list-group-item ${active === 'bookmarks' ? 'active'
                                                                : ''}`}><i
            className="fa-solid fa-bookmark"/><span
            className="d-none d-xl-inline"> Bookmarks</span></a>
        <a className={`list-group-item ${active === 'lists' ? 'active'
                                                            : ''}`}><i
            className="fa-solid fa-list"/><span
            className="d-none d-xl-inline"> List</span></a>
        <a className={`list-group-item ${active === 'profile' ? 'active'
                                                              : ''}`}><i
            className="fa-solid fa-user"/><span
            className="d-none d-xl-inline"> Profile</span></a>
        <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}><i
            className="fa-solid fa-ellipsis"/><span
            className="d-none d-xl-inline"> More</span></a>
      </div>
  );
};
export default NavigationSidebar;