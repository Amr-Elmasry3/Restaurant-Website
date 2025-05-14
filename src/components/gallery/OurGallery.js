import "./ourGallery.css";

// Import Components From MUI
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// Import Images
import { gallery } from "../../Data";

export default function OurGallery() {
  return (
    <div className="our-gallery" id="gallery">
      <div className="container">
        <div className="main-heading">
          <h4 className="title">Our Photo Gallery</h4>
          <h1 className="description">
            Let`s Check <span>Our Photo</span> Gallery
          </h1>
        </div>

        <Box className="box">
          <ImageList className="image-list" variant="masonry" cols={3} gap={8}>
            {gallery.map((item) => (
              <a href={item.img} download key={item.id}>
                <ImageListItem className="image-list-item">
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt=""
                    loading="lazy"
                  />
                </ImageListItem>
              </a>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
