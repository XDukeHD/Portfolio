import React from 'react';
import Image from 'next/image';
import {
    FaDiscord,
    FaGithub,
    FaCodepen,
    FaInstagram,
    FaCode
} from 'react-icons/fa'
import Bear from '../../public/img/chocolatebear.png';

export function HomeBio() {
  return (
    <main>
      <div className="container">
        <div className="box-info">
          <Image src={Bear} alt="xDUKE" width={200} height={100} />
          <h3>Hi! I'm xDUKE</h3>
          <p>Cloud Engineer | Backend Developer | Discord Bot Developer</p>

          <div className="links">
            <ul>
              <li id="discord">
                <a href="/mydiscord" target="_blank">
                  <FaDiscord style={{ scale: "3" }} /> <p> .....</p>Discord
                </a>
              </li>
              <li id="github">
                <a href="/github" target="_blank">
                  <FaGithub style={{ scale: "2.5" }} /> <p>......</p>Github
                </a>
              </li>
              <li id="codepen">
                <a href="/codepen" target="_blank">
                  <FaCodepen style={{ scale: "2.5" }} /> <p>......</p>Codepen
                </a>
              </li>
              <li id="instagram">
                <a href="/instagram" target="_blank">
                  <FaInstagram style={{ scale: "1.9" }} /> <p>..</p>Instagram
                </a>
              </li>
              <li id="portfolio">
                <a href="/home" target="_blank">
                  <FaCode style={{ scale: "2" }} /> <p>...</p>Portfólio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
