// import React, { useState } from "react";
// import "./SideNav.css";
// import { Link } from "react-router-dom";
// import {
//   faMinus,
//   faPlus,
//   faShieldDog,
//   faArrowRightFromBracket,
//   faAnglesRight,
//   faXmark,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { sidebarDataFirst, sidebarDataLast } from "./SidenavData";
// // import SearchButton from "./searchButton"; // Import the new component

// const Sidebar = ({ children }) => {
//   const [isNavbarActive, setIsNavbarActive] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleNavbarToggle = () => {
//     setIsNavbarActive(!isNavbarActive);
//   };

//   const handleMenuClick = (menu) => {
//     setActiveMenu(activeMenu === menu ? null : menu);
//   };

//   const handleSearchClick = (query) => {
//     setSearchQuery(query);
//     if (!isNavbarActive) {
//       setIsNavbarActive(true);
//     }
//   };

//   const isMenuActive = (menu) => activeMenu === menu;

//   const filteredSidebarDataFirst = sidebarDataFirst().filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className={`navbars ${isNavbarActive ? "active" : ""}`}>
//       <div className={`side-navbar sidebar ${isNavbarActive ? "active" : ""}`}>
//         <div className="navbar-container">
//           <div className="navbar-logo-div">
//             <Link
//               className="navbar-logo-link fw-bold h2"
//               onClick={handleNavbarToggle}
//             >
//               <FontAwesomeIcon icon={faShieldDog} />
//               <p className="navbar_para text-dark ms-2">Attendance</p>
//             </Link>
//           </div>
//           <div className="scrollbar"></div>
//           <div className="searchbutton">
//             {/* <SearchButton
//               searchQuery={searchQuery}
//               setSearchQuery={setSearchQuery}
//               onSearchClick={handleSearchClick}
//             /> */}
//           </div>
//           <ul className="menu-list p-0">
//             {filteredSidebarDataFirst.map((item, index) => (
//               <li key={index} className="menu-item">
//                 <div
//                   className="menu-link mt-3"
//                   onClick={() => handleMenuClick(item.title)}
//                 >
//                   <FontAwesomeIcon className="me-2 logo" icon={item.icon} />
//                   <span className="menu-link-text ps-1">{item.title}</span>
//                   <FontAwesomeIcon
//                     className="dowp-auto pe-4"
//                     icon={isMenuActive(item.title) ? faMinus : faPlus}
//                   />
//                 </div>
//                 {isMenuActive(item.title) && item.submenu && (
//                   <ul className="submenu mt-4">
//                     {item.submenu.map((subItem, subIndex) => (
//                       <li
//                         key={subIndex}
//                         className="pt-2 text-light submenu-hover"
//                       >
//                         <Link to={subItem.path} className="">
//                           <FontAwesomeIcon
//                             className="arrow-submenu"
//                             style={{ color: "#98cb46", fontSize: "14px" }}
//                             icon={faAnglesRight}
//                           />{" "}
//                           {subItem.title}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="container list-icon">
//           <ul className="menu-list p-0 margin-menu">
//             {sidebarDataLast().map((item, index) => (
//               <li key={index} className="menu-item">
//                 <div className="menu-link mt-3">
//                   <FontAwesomeIcon className="me-2 logo" icon={item.icon} />
//                   <span className="menu-link-text ps-1">{item.title}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* <div className="container">
//           <div className="user-container container box-shadow">
//             <div className="user-info">
//               <img
//                 className="rounded-pill dog-logo"
//                 alt="User Profile"
//                 width={40}
//                 height={40}
//               />
//               <div className="user-details align-item-center">
//                 <h4 className="user-name m-0">
//                   Eleanor Pena
//                   <br />
//                   <span className="user-occupation">Veterinary</span>
//                 </h4>
//               </div>
//             </div>
//             <Link to={"/"} className="logout-btn ms-4" onClick={handleNavbarToggle}>
//               <FontAwesomeIcon icon={faArrowRightFromBracket} />
//             </Link>
//           </div>
//         </div> */}
//       </div>
//       <main className={`main-sidenav ${isNavbarActive ? "active" : ""}`}>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import "./SideNav.css";
import { IonIcon } from "@ionic/react";
import {
  menuOutline,
  homeOutline,
  chatbubblesOutline,
  folderOutline,
  chevronDownOutline,
  pieChartOutline,
  peopleOutline,
  settingsOutline,
  logOutOutline,
} from "ionicons/icons";
import Header from "./Header";

export default function Sidebar() {
  const [isNavExpanded, setNavExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [collapseState, setCollapseState] = useState({
    Projects: false,
    Team: false,
  });

  const handleNavToggle = () => {
    setNavExpanded(!isNavExpanded);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  const handleCollapseToggle = (name) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
    <div className={`l-navbar ${isNavExpanded ? "expander" : ""}`} id="navbar">
      <nav className="nav">
        <div>
          <div className="nav__brand">
            <IonIcon
              icon={menuOutline}
              className="nav__toggle"
              onClick={handleNavToggle}
            />
            <a href="#" className="nav__logo">
              Bedimcode
            </a>
          </div>
          <div className="nav__list">
            <a
              href="#"
              className={`nav__link ${
                activeLink === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Dashboard")}
            >
              <IonIcon icon={homeOutline} className="nav__icon" />
              <span className="nav__name">Dashboard</span>
            </a>
            <a
              href="#"
              className={`nav__link ${
                activeLink === "Messenger" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Messenger")}
            >
              <IonIcon icon={chatbubblesOutline} className="nav__icon" />
              <span className="nav__name">Messenger</span>
            </a>
            <div
              className={`nav__link collapse ${
                collapseState.Projects ? "showCollapse" : ""
              }`}
            >
              <IonIcon icon={folderOutline} className="nav__icon" />
              <span className="nav__name">Projects</span>
              <IonIcon
                icon={chevronDownOutline}
                className="collapse__link"
                onClick={() => handleCollapseToggle("Projects")}
              />
              <ul className="collapse__menu">
                <a href="#" className="collapse__sublink">
                  Data
                </a>
                <a href="#" className="collapse__sublink">
                  Group
                </a>
                <a href="#" className="collapse__sublink">
                  Members
                </a>
              </ul>
            </div>
            <a
              href="#"
              className={`nav__link ${
                activeLink === "Analytics" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Analytics")}
            >
              <IonIcon icon={pieChartOutline} className="nav__icon" />
              <span className="nav__name">Analytics</span>
            </a>
            <div
              className={`nav__link collapse ${
                collapseState.Team ? "showCollapse" : ""
              }`}
            >
              <IonIcon icon={peopleOutline} className="nav__icon" />
              <span className="nav__name">Team</span>
              <IonIcon
                icon={chevronDownOutline}
                className="collapse__link"
                onClick={() => handleCollapseToggle("Team")}
              />
              <ul className="collapse__menu">
                <a href="#" className="collapse__sublink">
                  Data
                </a>
                <a href="#" className="collapse__sublink">
                  Group
                </a>
                <a href="#" className="collapse__sublink">
                  Members
                </a>
              </ul>
            </div>
            <a
              href="#"
              className={`nav__link ${
                activeLink === "Settings" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Settings")}
            >
              <IonIcon icon={settingsOutline} className="nav__icon" />
              <span className="nav__name">Settings</span>
            </a>
          </div>
        </div>
        <a href="#" className="nav__link">
          <IonIcon icon={logOutOutline} className="nav__icon" />
          <span className="nav__name">Log Out</span>
        </a>
      </nav>

    </div>
    <Header />
    </>
  );
}
