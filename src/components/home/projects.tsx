import Image from "next/image";
import Link from "next/link";
import Izzys from "../../public/img/izzys1.png";
import Cookiemc from "../../public/img/cookiemc.png";
import Eraanimes from "../../public/img/eraanimes.png";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";

export function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const openCard = (event) => {
      event.stopPropagation();
      // Resto do código para abrir o card
    };

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", openCard);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", openCard);
      });
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="portfolio"
      style={{ background: "#000", color: "var(--bs-indigo)" }}
    >
      <h2
        className="text-uppercase text-center"
        style={{ font: "normal normal bold 3rem/2rem Borel", color: "#fff" }}
      >
        Projects
      </h2>
      <hr className="star-dark mb-5" />
      <div className="container">
        <div className="projects-card project-one ">
          <div className="project-info-container ">
            <h2 className="project-title ">ThreeCloud</h2>
            <span className="project-load-bar"></span>
            <p className="project-short-desc">
              ThreeCloud is a platform that allows you to upload your projects and bots to host them for free, but at the same time is in development, so it is not yet available for use.
            </p>
            <button className="project-btn">
              <a href="#portfolio">See More</a>
            </button>
          </div>
        </div>
      </div>
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
