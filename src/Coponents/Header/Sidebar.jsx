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
      <Header isNavExpanded={isNavExpanded} />
    </>
  );
}
