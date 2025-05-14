import "./testimonials.css";

// Import Data
import { testimonialItem } from "../../Data";

// Import Icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonialItemsList = testimonialItem.map((item) => {
    return (
      <SwiperSlide key={item.id} className="swiper-slide">
        <div className="info">
          <div className="picture">
            <img src={item.img} alt="" />
          </div>

          <div className="name">
            <span>{item.name}</span>
            <span>Customer</span>
          </div>
        </div>

        <p className="description">{item.description}</p>

        <div className="rate">
          <div className="stars">
            <div className="back-stars">
              <StarBorderIcon className="icon" />
              <StarBorderIcon className="icon" />
              <StarBorderIcon className="icon" />
              <StarBorderIcon className="icon" />
              <StarBorderIcon className="icon" />
            </div>

            <div
              className="forword-star"
              style={{ width: `${(item.stars / 5) * 100}%` }}
            >
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="main-heading">
          <h4 className="title">Testimonials</h4>
          <h1 className="description">
            What Our Awesome <span>Clients Say</span> About Us
          </h1>
        </div>

        <div className="silder">
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              590: {
                slidesPerView: 2,
              },
              993: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonialItemsList}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
