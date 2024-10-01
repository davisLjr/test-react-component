import React from "react";
import {render} from "@testing-library/react";

import Header from "./Header";

const SECTIONS_1 = (
  <>
    <li className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="btn-dropdown-text">Navegación</span>
        <span className="material-icons-round btn-dropdown-icon">
          expand_more
        </span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item item-link" href="#">
          <span className="item-text">Navegación</span>
          <span className="material-icons-round">arrow_forward</span>
        </a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link nav-link-lg" href="#">
        <span>Navegación</span>
      </a>
    </li>
    <li className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="btn-dropdown-text">Navegación</span>
        <span className="material-icons-round btn-dropdown-icon">
          expand_more
        </span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación</span>
        </a>
        <a className="dropdown-item item-link" href="#">
          <span className="item-text">Navegación</span>
          <span className="material-icons-round">arrow_forward</span>
        </a>
      </div>
    </li>
  </>
);

describe("Header", () => {
  test("renders the Header component", () => {
    render(
      <>
        <Header hasLogin hasSearch sections={SECTIONS_1}></Header>
        <Header
          hasLogin
          hasSearch
          sections={SECTIONS_1}
          isSectionExtended
        ></Header>
        <Header sections={SECTIONS_1} hasProfile hasSearch></Header>
      </>,
    );
  });
});
