"use client";

import { useState, useEffect, Children, cloneElement, forwardRef } from "react";
import "./Carousel.sass";

const Carousel = forwardRef(({ children }, ref ) => {
  const [peges, setPages] = useState([]);
  const [slid, setSlid] = useState("0");
  const [slidCounter, setSlidCounter] = useState(1);

  const addArrowsLeft = () => {
    setSlid((currentSlid) => {
      const newSlid = currentSlid + 100;
      return Math.min(newSlid, 0);
    });
    setSlidCounter((currentSlid) => {
      const slidCounter = currentSlid - 1;
      return Math.max(slidCounter, 1);
    });
  };
  const addArrowsRight = () => {
    setSlid((currentSlid) => {
      const newSlid = currentSlid - 100;
      return Math.max(newSlid, -(peges.length - 1) * 100);
    });
    setSlidCounter((currentSlid) => {
      const slidCounter = currentSlid + 1;
      return Math.min(slidCounter, peges.length);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          },
        });
      })
    );
  }, [children]);

  return (
    <div ref={ref} className="carousel-section">
      <div className="carousel-contianer">
        <div className="carousel-window">
          <div
            className="all-pages-container"
            style={{ transform: `translateX(${slid}%)` }}
          >
            {peges}
          </div>
        </div>
        <div className="arrows">
          <svg
            className="buttom-arrow left"
            onClick={addArrowsLeft}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="buttom-arrow Left"
            height="10px"
            width="auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="arrows-text">
            <span>{slidCounter}</span>
            <span>/</span>
            <span>{peges.length}</span>
          </div>
          <svg
            className="buttom-arrow right"
            onClick={addArrowsRight}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="buttom-arrow Right"
            height="10px"
            width="auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;
