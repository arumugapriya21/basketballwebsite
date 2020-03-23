import React from "react";
import logo from "./logo.svg";
import "./App.css";
import football from "./football.jpg";
import football1 from "./football-1.jpg";
import basketball from "./basketball.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

function App() {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg  navbar navbar-dark bg-dark"
        style={{
          fontFamily: "American Typewriter, serif",
          fontVariant: "small-caps"
        }}
      >
        <a className="navbar-brand" href="#">
          BasketBall
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About-Us
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Tournament
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="#">
                Team Section
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="#">
                Video section
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="#">
                FAQ Section
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        style={{
          fontFamily: "American Typewriter, serif",
          fontVariant: "small-caps"
        }}
      >
        <img
          src={basketball}
          alt="Smiley face"
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: "relative" }}
        ></img>
        <div
          style={{
            position: "absolute",
            left: "700px",
            top: "100px",
            right: "25px",
            bottom: "250px"
          }}
        >
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={img1}
                  className="d-block w-100"
                  alt="First slide"
                  style={{ width: "400px", height: "400px" }}
                />
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{
                    backgroundColor: "lightgray",
                    color: "black",
                    borderRadius: "10px"
                  }}
                >
                  <h5>BasketBall tournament - March-2020</h5>
                  <p>
                    This championship took place between the different
                    international teams of basketball.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={img2}
                  className="d-block w-100"
                  alt="Second slide"
                  style={{ width: "400px", height: "400px" }}
                />
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{
                    backgroundColor: "lightgray",
                    color: "black",
                    borderRadius: "10px"
                  }}
                >
                  <h5>BasketBall tournament - March-2020</h5>
                  <p>
                    Achieving a medal in the Olympic Games for basketball is the
                    highest reward one can get in the career.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={img3}
                  className="d-block w-100"
                  alt="Third slide"
                  style={{ width: "400px", height: "400px" }}
                />
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{
                    backgroundColor: "lightgray",
                    color: "black",
                    borderRadius: "10px"
                  }}
                >
                  <h5>BasketBall tournament - March-2020</h5>
                  <p>
                    Euro Basket is one of the most well known championships
                    played among the basketball players.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
