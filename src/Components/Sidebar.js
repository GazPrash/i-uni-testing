import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="container my-3">
        <form class="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search For Communities"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search my-1"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </div>
      <h3 className="fst-italic text-center py-2">Top Communites </h3>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          SVNIT
          <span class="badge bg-primary rounded-pill">116 Members</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          IIITS
          <span class="badge bg-primary rounded-pill">88 Members</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Gaming
          <span class="badge bg-primary rounded-pill">51 Members</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Programming
          <span class="badge bg-primary rounded-pill">20 Members</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Everything Sports
          <span class="badge bg-primary rounded-pill">5 Members</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
