import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Full Stack Developer", "Security Engineer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <img src="assets/anto.jpg" alt="" />
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>
            Andrey <span>Carvajal</span>
          </h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>

          <div class="social-container">
            <a
              href="https://github.com/Wasabi95"
              className="github social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="linkedin social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/AndyCarvajal100fx"
              className="facebook social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com/AndreyCarvaja17"
              className="twitter social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/carvajal.ups/"
              className="instagram social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>

          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
