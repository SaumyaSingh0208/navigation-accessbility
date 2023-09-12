import React from "react";
import "./Hero.css";
import Carousel1 from "../Images/carousel1-img.jpg";
import Carousel2 from "../Images/carousel2-img.jpg";
import Carousel3 from "../Images/carousel3-img.jpg";

const Hero = () => {
  return (
    <div id="main-content" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Carousel1} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Scene 1</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Carousel2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Scene2</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Carousel3} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Scene3</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#main-content"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#main-content"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
