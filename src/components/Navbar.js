import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div role="navigation">
      <a className="skipMainContent " href="#main-content">
        Skip to main content
      </a>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body"
        data-bs-theme=""
      >
        <div class="container-fluid">
          <a
            class="navbar-brand"
            // aria-label="MyPortfolio"
            href="google.com"
          >
            MyPortfolio
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" role="list">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-label="HomePage"
                  aria-current="page"
                  href="google.com"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="google.com">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="google.com">
                  Contact
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="google.com"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li>
                    <a class="dropdown-item" href="google.com">
                      Games Projects
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="google.com">
                      Portfolio Projects
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="google.com">
                      UI/UX Projects
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-tem ms-auto">
                <form class="d-flex " role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
