import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <h2>
            <a href="#intro" className="logo1">
              <img src="assets/cc.png" alt="" />
            </a>
          </h2>
          <a href="#intro" className="logo">
            Andrey.
          </a>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>carvajal.ups@.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
