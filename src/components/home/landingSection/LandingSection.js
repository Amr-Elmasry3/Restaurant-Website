// Import Css File
import "./landingSection.css";

// Import Parse Library
import parse from "html-react-parser";

// Import Components
import Button from "../../button/Button";

// Import Data
import { homeSlide } from "../../../Data";

// Import Icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Import UseState Hook
import { useState } from "react";

export default function LandingSection() {
  const [homeSlideState, setHomeSlideState] = useState(homeSlide);
  const [movementDistance, setmovementDistance] = useState(-100);

  function handleClickRightIcon() {
    if (homeSlideState[homeSlideState.length - 1].active) return;

    const newHomeSlideState = [...homeSlideState];

    for (let x = 0; x < newHomeSlideState.length; x++) {
      if (newHomeSlideState[x].active) {
        newHomeSlideState[x].active = false;
        newHomeSlideState[x + 1].active = true;
        break;
      }
    }

    setHomeSlideState(newHomeSlideState);

    setmovementDistance(movementDistance - 100);
  }
  function handleClickLeftIcon() {
    if (homeSlideState[0].active) return;

    const newHomeSlideState = [...homeSlideState];

    for (let x = 0; x < newHomeSlideState.length; x++) {
      if (newHomeSlideState[x].active) {
        newHomeSlideState[x].active = false;
        newHomeSlideState[x - 1].active = true;
        break;
      }
    }

    setHomeSlideState(newHomeSlideState);

    setmovementDistance(movementDistance + 100);
  }

  const homeSlideList = homeSlideState.map((slide) => {
    return (
      <div
        className="box"
        key={slide.id}
        style={{ transform: `translateX(${movementDistance}%)` }}
      >
        <img src={slide.img} alt="" />

        <div className="content">
          <div className="details">
            <h2>Welcome To Restaurant</h2>
            <h1 className="title">{parse(slide.title)}</h1>
            <p className="description">{slide.description}</p>
          </div>

          <div className="btns">
            <Button className="first-button" buttonName="About More" />
            <Button className="second-button" buttonName="Check Menu" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="landing-section">
      <div className="prev-next">
        <ArrowRightAltIcon
          className={homeSlideState[0].active ? "icon disappere" : "icon"}
          onClick={() => {
            handleClickLeftIcon();
          }}
        />
        <ArrowRightAltIcon
          className={
            homeSlideState[homeSlideState.length - 1].active
              ? "icon disappere"
              : "icon"
          }
          onClick={() => {
            handleClickRightIcon();
          }}
        />
      </div>

      <div className="landing-boxes">{homeSlideList}</div>
    </div>
  );
}
