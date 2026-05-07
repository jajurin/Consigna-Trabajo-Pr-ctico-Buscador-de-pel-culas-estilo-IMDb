import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import carruselMejorado from "../../assets/carruselMejor.png";
import carrusel2 from "../../assets/carrusel2.png";

function Header() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      style={{
        width: "95%",
        margin: "20px auto",
        borderRadius: "15px",
        overflow: "hidden",

      }}
    >

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src={carruselMejorado}
            className="d-block w-50"
            alt="..."
            style={{
              height: "370px",
      width: "70%",
      margin: "0 auto",
      borderRadius: "12px"
            }}
          />
        </div>

        <div className="carousel-item">
          <img
            src={carrusel2}
            className="d-block w-50"
            alt="..."
            style={{
            height: "370px",
      width: "70%",
      objectFit: "cover",

      margin: "0 auto",
      borderRadius: "12px"
            }}
          />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        style={{
          width: "60px",
           marginLeft: "20%",
          hover: {
            background: "rgba(0, 0, 0, 0.5)"
          }
        }}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Previous
        </span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        style={{
          width: "60px",
          marginRight: "20%"
    
        }}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Next
        </span>
      </button>

    </div>
  );
}

export default Header;