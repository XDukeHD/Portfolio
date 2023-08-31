import React from "react";
import Image from "next/image";
import Link from "next/link";
import Izzys from "../../public/img/izzys1.png";
import Cookiemc from "../../public/img/cookiemc.png";
import Eraanimes from "../../public/img/eraanimes.png";

export function Projects() {
  return (
    <section
      id="portfolio"
      className="portfolio"
      style={{ background: "#000", color: "var(--bs-indigo)" }}
    >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <h2 className="text-uppercase text-center" style={{ font: "normal normal bold 3rem/2rem Borel", color: "#fff" }}>
          Projects</h2>
        <hr className="star-dark mb-5" />
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              href="#izzys"
              data-bs-toggle="modal"
            >
              <div
                className="d-flex portfolio-item-caption position-absolute h-100 w-100"
                style={{
                  color: "var(--bs-indigo)",
                  background: "var(--bs-indigo)",
                }}
              >
                <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <Image
                src={Izzys}
                alt="Izzys"
                width={1920}
                height={1080}
                className="img-fluid"
                style={{
                  width: "500px",
                  height: "350px",
                }}
              />
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              href="#cookiemc"
              data-bs-toggle="modal"
            >
              <div
                className="d-flex portfolio-item-caption position-absolute h-100 w-100"
                style={{ background: "var(--bs-indigo)" }}
              >
                <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <Image
                src={Cookiemc}
                alt="cookiemc"
                width={600}
                height={400}
                className="img-fluid"
              />
            </a>
          </div>
          {/*<div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              href="#eraanimes"
              data-bs-toggle="modal"
            >
              <div
                className="d-flex portfolio-item-caption position-absolute h-100 w-100"
                style={{ background: "var(--bs-indigo)" }}
              >
                <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <Image
                src="/assets/img/eraanimes.png"
                alt="eraanimes"
                width={600}
                height={400}
                className="img-fluid"
              />
            </a>
          </div>*/
          }
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
