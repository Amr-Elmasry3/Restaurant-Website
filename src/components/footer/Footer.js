import "./footer.css";

// Import Pictures from Assets Folder
import logo from "../../assets/imgs/logo.png";

// Import Matrial Icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="part-one">
          <div className="restou">
            <img src={logo} alt="" />

            <p className="description">
              We are many variations of passages available but the majority have
              suffered alteration some form by injected humour words believable.
            </p>

            <div className="newsletter">
              <span>Subscribe Our Newsletter</span>

              <div className="subscribe">
                <EmailIcon className="icon" />
                <input type="email" placeholder="Enter Email" />
                <button>
                  Subscribe <SendIcon className="icon" />
                </button>
              </div>
            </div>
          </div>

          <div className="quick-links same-title-style">
            <h3 className="title">Quick Links</h3>

            <div className="content">
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#testimonials">Testimonials</a>
            </div>
          </div>

          <div className="opening-hours same-title-style">
            <h3 className="title">Opening Hours</h3>

            <div className="content">
              <div className="box">
                <span className="day">Week</span>
                <span className="time">09:00 AM - 20:00 PM</span>
              </div>

              <div className="box">
                <span className="day">Sun</span>
                <span className="time">09:30 AM - 21:00 PM</span>
              </div>

              <div className="box">
                <span className="day">Man</span>
                <span className="time">10:00 AM - 22:00 PM</span>
              </div>

              <div className="box">
                <span className="day">Tue</span>
                <span className="time">10:30 AM - 21:00 PM</span>
              </div>

              <div className="box">
                <span className="day">Sat</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>

          <div className="get-in-touch same-title-style">
            <h3 className="title">Get In Touch</h3>

            <div className="content">
              <div className="box">
                <div className="box-icon">
                  <LocationOnIcon className="icon" />
                </div>

                <div className="details">
                  <span className="title">Our Address</span>
                  <span className="info">
                    25/AB Milford Road, New York, USA
                  </span>
                </div>
              </div>

              <div className="box">
                <div className="box-icon">
                  <PhoneIcon className="icon" />
                </div>

                <div className="details">
                  <span className="title">Call Us</span>
                  <span className="info">+2 123 654 7898</span>
                </div>
              </div>

              <div className="box">
                <div className="box-icon">
                  <EmailIcon className="icon" />
                </div>

                <div className="details">
                  <span className="title">Mail Us</span>
                  <span className="info">info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="part-two">
          <p className="copyright">
            &#169; Copyright 2025 <span>Restrou</span> All Rights Reserved.
          </p>

          <div className="social-links">
            <a href>
              <FacebookOutlinedIcon className="icon" />
            </a>

            <a href>
              <XIcon className="icon" />
            </a>

            <a href>
              <LinkedInIcon className="icon" />
            </a>

            <a href>
              <YouTubeIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
