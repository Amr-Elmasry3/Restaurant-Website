// Import Css File
import "./Headr.css";

// Import UseState Hook
import { useState } from "react";

// Import Logo Img
import logo from "../../../assets/imgs/logo.png";

// Import Data
import { links } from "../../../Data";

// Import Components
import Button from "../../button/Button";

// Import Icon
import MenuIcon from "@mui/icons-material/Menu";

export default function Headr() {
  const [linksData, setLinksData] = useState(links);
  const [linksState, setLinksState] = useState(false);
  const [headrBackground, setHeadrBackground] = useState(false);

  function handleActiveLink(id) {
    const newLinksData = [...linksData];

    newLinksData.map((link) => {
      return link.id === id ? (link.active = true) : (link.active = false);
    });

    setLinksData(newLinksData);
  }

  function handleClickMenuIcon() {
    setLinksState(!linksState);
  }

  window.onscroll = () => {
    // Handle Background Headr
    if (window.scrollY >= 100) {
      setHeadrBackground(true);
    } else {
      setHeadrBackground(false);
    }
  };

  const linksList = linksData.map((link) => {
    return (
      <a href={link.href} key={link.id}>
        <li
          className={link.active ? "active" : null}
          onClick={() => {
            handleActiveLink(link.id);
          }}
        >
          {link.link}
        </li>
      </a>
    );
  });

  return (
    <div className={headrBackground ? "headr bg" : "headr"}>
      <div className="container">
        <a href="#home" className="logo">
          <img src={logo} alt="" />
        </a>

        <ul className={linksState ? "links open" : "links"}>
          {linksList}
          <Button buttonName={"Book Now"} />
        </ul>

        <MenuIcon
          className="menu-icon"
          onClick={() => {
            handleClickMenuIcon();
          }}
        />

        <Button buttonName={"Book Now"} />
      </div>
    </div>
  );
}
