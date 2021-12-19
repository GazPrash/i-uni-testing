import React from "react";

function OffCampus() {
  return (
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            iUniversity
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body mx-auto">
          <div className="dropdown mt-3">
            <button
              className="btn btn-outline-secondary mx-2 px-5"
              type="button"
              id="LoginButton"
            >
              Login
            </button>
            <button
              className="btn btn-primary px-5"
              type="button"
              id="SignUpButton"
            >
              Sign Up
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default OffCampus;
