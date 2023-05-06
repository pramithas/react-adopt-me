import { useState } from "react";

const Carousel = (props) => {
  const [active, setActive] = useState(0);

  let { images } = props;

  if (!images) {
    images = ["http://pets-images.dev-apis.com/pets/none.jpg"];
  }

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <img
            onClick={(e) => {
              setActive(e.target.dataset.index);
            }}
            data-index={index}
            key={photo}
            src={photo}
            className={index == active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
