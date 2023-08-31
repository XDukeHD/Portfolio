import React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
      id="mainNav"
      style={{ background: "linear-gradient(white 0%, black 0%)" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          xDuke
        </a>
        <button
          className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#portfolio"
                style={{ borderColor: "var(--bs-indigo)" }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#about"
                style={{ paddingLeft: "14px" }}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="/bio"
                style={{ paddingLeft: "14px" }}
              >
                Links
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
