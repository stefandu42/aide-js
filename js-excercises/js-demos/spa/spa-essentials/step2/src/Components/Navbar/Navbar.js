import { Navbar as BootstrapNavbar} from "bootstrap";
// import {getUserSessionData} from "../utils/session.js";
// destructuring assignment
const Navbar = (data = { isAuthenticated: false }) => {
  const navbarWrapper = document.querySelector("#navbarWrapper");
  let navbar;
  //let user = getUserSessionData();

  if (! data.isAuthenticated) {   
    navbar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">e-Pizzeria</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" data-uri="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/register">Register</a>
              </li>            
            </ul>
          </div>
        </div>
      </nav>
  `;
    //  <a class="nav-item nav-link disabled" href="#">${user.username}</a>
  } else { 
  navbar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">e-Pizzeria</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" data-uri="/">Home</a>
              </li>    
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  `;
  }
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
