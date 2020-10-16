import React from "react";
import { Link } from "react-router-dom";
import page4 from "../../assets/icons/page4.png";
import "./page3.scss";

function Page3() {
  return (
    <div className="page3">
      <img src={page4} alt="Page 3" className="page3__screen" />
      <Link to="/4">
        <div className="page3__button" />
      </Link>
    </div>
  );
}

export default Page3;
