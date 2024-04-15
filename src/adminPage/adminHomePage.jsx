import React, { useState } from 'react';
// import AdminSidebar from "../sidebar/adminSidebar";
import {SidebarData as items} from "../sidebar/sibebardata";
import valerie from "../img/Valerie.png";

function AdminHomePage({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`row ${isSidebarOpen ? 'sidebar-open' : ''}`}>
    <div className="col-2">
      <div className="sidebar">
        <div className='sidebar-main'>
          ADMIN
        </div>
        <div className='profile-image'>
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src={valerie}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </div>
        {items.map((item, index) => (
          <a key={index} href={item.path || "#"} className="sidebar-item plain">
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </a>
        ))}
      </div>
    </div>
    <div className="col-10">{children}</div>
  </div>
  );
}

export default AdminHomePage;
