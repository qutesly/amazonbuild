import React, { useState } from "react";
import Slider from "react-slick";
import {
  BannerImg1,
  BannerImg2,
  BannerImg3,
  BannerImg4,
  BannerImg5,
} from "../../assets";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          right: "50%",
          margin: "0 auto",
          transform: "translate(-50%, -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                border: "1px solid #f3a847",
                background: "#131921",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
              }
            : {
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                border: "1px solid white",
                background: "#232F3E",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
              }
        }
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "50%",
                right: "50%",
                margin: "0 auto",
                transform: "translate(-50%, -50%)",
                width: "210px",
              }}
            >
              <ul
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
        }
      },
    ]
  };
  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={BannerImg1} alt="BannerImgOne" />
          </div>
          <div>
            <img src={BannerImg2} alt="BannerImgTwo" />
          </div>
          <div>
            <img src={BannerImg3} alt="BannerImgThree" />
          </div>
          <div>
            <img src={BannerImg4} alt="BannerImgFour" />
          </div>
          <div>
            <img src={BannerImg5} alt="BannerImgFive" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
