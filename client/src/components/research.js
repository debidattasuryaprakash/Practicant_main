import React from "react";
import "../styles/research.css";
import banner1 from "../assets/image1.png";
import { BsArrowRight } from "react-icons/bs";

function research() {
  return (
    <>
      <div className="research__container">
        <div className="main__container">
          <div className="card__image">
            <img src={banner1} />
          </div>
          <div className="card__head">
            <h1>Calculus</h1>
          </div>
          <div className="card__para">
            <p>
              Calculus, originally called infinitesimal calculus or "the
              calculus of infinitesimals", is the mathematical study of
              continuous change, in the same way that geometry is the study of
              shape, and algebra is the study of generalizat...
            </p>
          </div>
          <div className="read__more">
            Read More
            <BsArrowRight
              style={{
                marginLeft: "0.5rem",
                alignItems: "center",
              }}
            />
          </div>
        </div>
        <div className="main__container">
          <div className="card__image">
            <img src={banner1} />
          </div>
          <div className="card__head">
            {" "}
            <h1>Calculus</h1>
          </div>
          <div className="card__para">
            <p>
              Calculus, originally called infinitesimal calculus or "the
              calculus of infinitesimals", is the mathematical study of
              continuous change, in the same way that geometry is the study of
              shape, and algebra is the study of generalizat...
            </p>
          </div>
          <div className="read__more">
            Read More
            <BsArrowRight
              style={{
                marginLeft: "0.5rem",
                alignItems: "center",
              }}
            />
          </div>
        </div>
        <div className="main__container">
          <div className="card__image">
            <img src={banner1} />
          </div>
          <div className="card__head">
            {" "}
            <h1>Calculus</h1>
          </div>
          <div className="card__para">
            <p>
              Calculus, originally called infinitesimal calculus or "the
              calculus of infinitesimals", is the mathematical study of
              continuous change, in the same way that geometry is the study of
              shape, and algebra is the study of generalizat...
            </p>
          </div>
          <div className="read__more">
            Read More
            <BsArrowRight
              style={{
                marginLeft: "0.5rem",
                alignItems: "center",
              }}
            />
          </div>
        </div>
        <div className="main__container">
          <div className="card__image">
            <img src={banner1} />
          </div>
          <div className="card__head">
            {" "}
            <h1>Calculus</h1>
          </div>
          <div className="card__para">
            <p>
              Calculus, originally called infinitesimal calculus or "the
              calculus of infinitesimals", is the mathematical study of
              continuous change, in the same way that geometry is the study of
              shape, and algebra is the study of generalizat...
            </p>
          </div>
          <div className="read__more">
            Read More
            <BsArrowRight
              style={{
                marginLeft: "0.5rem",
                alignItems: "center",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default research;
