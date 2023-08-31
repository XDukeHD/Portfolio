import React from "react";
import Image from "next/image";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaDiscord,
    FaCodepen
} from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="text-center footer bg-black">
      <div className="container">
        <h2 className="text-uppercase bold" style={{ font: "normal normal bold 1.8rem/2rem Borel", color: "#fff" }}>
          My Social Networks
        </h2>
        <hr className="star-light mb-5" />
        <ul className="list-inline-item">
          <li className="list-inline-item">
            <a className="btn btn-social rounded-circle" role="button" href="https://instagram.com/tulio_zanella/">
                <FaInstagram style={{ scale: "3", color: '#c13584' }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn  btn-social rounded-circle" role="button" href="#">
                <FaTwitter style={{ scale: "3", color: "#1DA1F2" }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn btn-social rounded-circle" role="button" href="https://github.com/XDukeHD" >
              <FaGithub style={{ scale: "3" }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn btn-social rounded-circle" role="button" href="https://discordapp.com/users/816775306115285073" >
              <FaDiscord style={{ scale: "3", color: "#7289DA" }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn btn-social rounded-circle" role="button" href="https://codepen.io/xdukehd" >
              <FaCodepen style={{ scale: "3", color: "#696969" }} />
            </a>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center text-white">
          <small className=" text-center" style={{ fontSize: "1.3rem", color: "#fff" }}>
            © 2023 XDuke. All rights reserved.
          </small>
        </div>
        <div className="container">
          <small>This site is made with Next.js, React, Bootstrap and TypeScript.</small>
        </div>
    </footer>
  );
}
