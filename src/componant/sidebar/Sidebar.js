import React, { useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sidebar-parent ">
        <div className={open ? "active sidebar-left" : "sidebar-left"}>
          <div className="login-logo">
            <h3>Lorem</h3>
          </div>
          <div className="list-menu">
            {!open ? <Link to="#">Worker Profile</Link> : <FaUser />}

            {!open ? <Link to="/addworker">Add Worker Data</Link> : <FaUserPlus />}
            {!open ? <Link to="/workertable">All Workers</Link> : <FaUsers />}
          </div>
          {!open ? (
            <div className="logout-btn btn">
              Log Out <FaSignOutAlt />
            </div>
          ) : (
            <FaSignOutAlt />
          )}

          <div className="icon" onClick={() => setOpen(!open)}>
            <FaAngleDoubleLeft />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
