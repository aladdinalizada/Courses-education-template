import React from "react";
import "./index.scss";
const BackToTop = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button onClick={topFunction()}>
      <i class="fa-sharp fa-solid fa-turn-up"></i>
    </button>
  );
};

export default BackToTop;
