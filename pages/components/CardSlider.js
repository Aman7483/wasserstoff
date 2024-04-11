import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCollections from "./CardCollections";

const CardSlider = () => {
  const cards = [
    {
      year: 2024,
      author: "Pablo",
      name: "Collectible Name 1",
      imageSrc: "/image1@2x.png",
    },
    {
      year: 2025,
      author: "John",
      name: "Collectible Name 2",
      imageSrc: "/image2@2x.png",
    },
    {
      year: 2026,
      author: "Jane",
      name: "Collectible Name 3",
      imageSrc: "/image3@2x.png",
    },
    // Add more card objects as needed
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <CardCollections card={card} />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
