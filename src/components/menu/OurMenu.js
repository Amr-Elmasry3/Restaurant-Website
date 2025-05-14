import "./menu.css";
import { useState } from "react";
import { menuItems } from "../../Data";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export default function OurMenu() {
  const [tagsState, setTagsState] = useState([
    { id: 1, category: "All", active: true },
    { id: 2, category: "Lunch", active: false },
    { id: 3, category: "Dinner", active: false },
    { id: 4, category: "Breakfast", active: false },
    { id: 5, category: "Fast Food", active: false },
    { id: 6, category: "Dessert", active: false },
  ]);

  const [categoryNow, setCategoryNow] = useState("All");

  function handleTagsState(id) {
    const newTagsState = [...tagsState];

    newTagsState.map((tag) => {
      return id === tag.id ? (tag.active = true) : (tag.active = false);
    });

    setTagsState(newTagsState);
  }

  function handleReturnProducts() {
    // eslint-disable-next-line array-callback-return
    const menuItemsList = menuItems.map((item) => {
      if (categoryNow === "All" || categoryNow === item.category) {
        return (
          <div className="item" key={item.id}>
            <div className="img-price">
              <img src={item.img} alt="" />
              <span className="price">${item.price}</span>
            </div>

            <h4 className="title">{item.title}</h4>

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

              <span className="reviews">
                {item.stars} ({item.reviews}K)
              </span>
            </div>
          </div>
        );
      }
    });

    // console.log(categoryNow);

    return menuItemsList;
  }

  const tagsList = tagsState.map((tag) => {
    return (
      <li
        key={tag.id}
        className={tag.active ? "active" : null}
        onClick={() => {
          handleTagsState(tag.id);
          setCategoryNow(tagsState[tag.id - 1].category);
        }}
      >
        {tag.category}
      </li>
    );
  });

  return (
    <div className="our-menu" id="menu">
      <div className="container">
        <div className="main-heading">
          <h4 className="title">Our Menu</h4>
          <h1 className="description">
            Let`s Check <span>Our Menu</span>
          </h1>
        </div>

        <div className="tags">{tagsList}</div>

        <div className="products">{handleReturnProducts()}</div>
      </div>
    </div>
  );
}
