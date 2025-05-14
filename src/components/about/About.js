// Import Css File
import "./about.css";

// Import Imges
import aboutImgOne from "../../assets/imgs/about-1.jpg";
import aboutImgTwo from "../../assets/imgs/about-2.jpg";
import serviceImgOne from "../../assets/imgs/quality.svg";
import serviceImgTwo from "../../assets/imgs/delicious.svg";

// Import Button Component
import Button from "../button/Button";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-img">
          <div className="experience">
            <span>30+</span>
            <span>Years Of Experience</span>
          </div>
          <img src={aboutImgOne} alt="" />
          <img src={aboutImgTwo} alt="" />
        </div>

        <div className="content">
          <div className="main-heading">
            <h4 className="title">About Us</h4>
            <h1 className="description">
              We Are Always <span>Here To Serve</span> You Fresh Food
            </h1>
          </div>

          <p>
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words look even. Many desktop packages and web page editors now
            their default model text.
          </p>

          <div className="services">
            <div className="box">
              <div className="picture">
                <img src={serviceImgOne} alt="" />
              </div>

              <div className="details">
                <h4>Best Quality Food</h4>
                <p>It is a long established fact by the layout.</p>
              </div>
            </div>

            <div className="box">
              <div className="picture">
                <img src={serviceImgTwo} alt="" />
              </div>

              <div className="details">
                <h4>Delicious Food</h4>
                <p>It is a long established fact by the layout.</p>
              </div>
            </div>
          </div>

          <Button buttonName="Check Menu" />
        </div>
      </div>
    </div>
  );
}
