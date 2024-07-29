import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = ({ isNavExpanded }) => {
  return (
    <header className={`header navbar navbar-expand-sm  shadow-sm ${isNavExpanded ? 'header-expanded' : ''}`}>
      
      {/* <nav class=" "> */}
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Logo</a> */}
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>    
      </ul>
    </div>
  </div>
{/* </nav> */}
    </header>
  );
};

export default Header;
