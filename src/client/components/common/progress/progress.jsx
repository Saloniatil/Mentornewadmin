import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProgressButton = () => {
  const [progress, setProgress] = useState(0);
  const [stroke, setStroke] = useState(0);

  window.addEventListener("scroll", () => {
    const body = document.body,
      html = document.documentElement;
    //gets the total height of page till scroll
    const totalheight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    // calculates the total stroke value
    setProgress(totalheight);
    const currentDistance = window.scrollY / (totalheight / 3000);
    // calculates the current stroke value
    setStroke(totalheight - currentDistance / 8);
    // condition to hide scroll progress if page in top
    if (window.scrollY == 0) {
      setStroke(totalheight);
    }
    // condition to make scroll progress to 100 if page in bottom
    if (window.innerHeight + window.scrollY >= totalheight) {
      setStroke(0);
    }
  });
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        onClick={scrollToTop}
        className={`back-to-top ${stroke < progress ? "show" : ""}`}
      >
        <Link
          className="back-to-top-icon align-items-center justify-content-center d-flex show"
          to="#top"
        >
          <i className="fa fa-arrow-up" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
};

export default ProgressButton;
