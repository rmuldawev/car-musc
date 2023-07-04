import React from "react";
import "../OurWorks/styles.css";
import FourDots from "../../assets/icons/fourDots";

const images = [
  {
    id: 1,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 56.png"),
  },
  {
    id: 2,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 57.png"),
  },
  {
    id: 3,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 58.png"),
  },
  {
    id: 4,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 59.png"),
  },
  {
    id: 5,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 60.png"),
  },
  {
    id: 6,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 61.png"),
  },
  {
    id: 7,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 60.png"),
  },
  {
    id: 8,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 61.png"),
  },
  {
    id: 9,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 59.png"),
  },
  {
    id: 10,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 57.png"),
  },
  {
    id: 11,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 58.png"),
  },
  {
    id: 12,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 59.png"),
  },
  {
    id: 13,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 56.png"),
  },
  {
    id: 14,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 57.png"),
  },
  {
    id: 15,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 59.png"),
  },
  {
    id: 16,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 58.png"),
  },
  {
    id: 17,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 57.png"),
  },
  {
    id: 18,
    src: require("../../assets/images/GalleryPhotoCars/Rectangle 56.png"),
  },
];

const OurWorks = () => {
  return (
    <div>
      <div className="OurWorksContainer">
        <p className="ourWorksTitle">НАШИ РАБОТЫ</p>
        <FourDots />
      </div>
      <div className="galleryImages">
        {images.map((e) => {
          return <img src={e.src} key={e.id} className="galleryImageStyle" />;
        })}
      </div>
    </div>
  );
};

export default OurWorks;
