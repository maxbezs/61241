"use client";
import Card from "./Card";
import Image from "next/image";
import Pricing from "../../public/Pricing.png";

import React, { useRef, useEffect } from "react";

const Carousel = () => {
  const slidesRef = useRef(null);
  useEffect(() => {
    const slideWidth = slidesRef.current.scrollWidth / 3;
    slidesRef.current.scrollTo({
      left: slideWidth,
      behavior: "auto",
    });
  }, []);
  const scrollToSlide = (direction) => {
    const slideWidth = slidesRef.current.scrollWidth / 3;
    const currentScrollLeft = slidesRef.current.scrollLeft;

    if (direction === "prev") {
      slidesRef.current.scrollTo({
        left: currentScrollLeft - slideWidth,
        behavior: "smooth",
      });
    } else if (direction === "next") {
      slidesRef.current.scrollTo({
        left: currentScrollLeft + slideWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="xl:w-[100%] w-[100vw] overflow-hidden max-w-[100vw]">
      <div className="w-full flex justify-end px-4 xl:hidden">
        <button onClick={() => scrollToSlide("prev")}>
          <Image
            src={"/arrow-carousel.png"}
            alt="arrow previous carousel card"
            className="scale-x-[-1] me-5"
            width={40}
            height={40}
          />
        </button>
        <button onClick={() => scrollToSlide("next")}>
          <Image
            alt="arrow next carousel card"
            src={"/arrow-carousel.png"}
            width={40}
            height={40}
          />
        </button>
      </div>
      <div
        className=" flex overflow-x-auto snap-mandatory snap-x scroll-smooth w-full  my-8 xl:w-fit xl:gap-[61px] xl:mb-20 xl:mx-[80px] 2xl:w-[calc(100vw-180px)] 2xl:justify-between"
        ref={slidesRef}
      >
        <Image
          src={Pricing}
          alt="Pricing Back"
          className="xl:block hidden max-w-[100%]"
          style={{
            height: "auto",
            width: "auto",
            position: "absolute",
            right: "80px",
            zIndex: "1",
          }}
        />
        {[1, 2, 3].map((slide) => (
          <div
            key={`slide-${slide}`}
            className={`snap-center flex-shrink-0 transform origin-center scale-100 transition-transform duration-500 xl:m-0 ${
              slide === 1 ? "ml-4" : slide === 2 ? "mx-4" : "mr-4"
            }`}
            id={`slide-${slide}`}
          >
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
