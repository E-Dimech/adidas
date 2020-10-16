import React from "react";
import { Link } from "react-router-dom";
import page5 from "../../assets/icons/page5.png";
import "./page4.scss";

class Page4 extends React.Component {
  colourAdd = () => {
    document.querySelector(".page4__button").style.backgroundColor =
      "rgba(130, 216, 43, 0.62)";
  };
  render() {
    return (
      <div className="page4">
        <img src={page5} alt="Page 4" className="page4__screen" />
        <Link to="/5">
          <div className="page4__link" />
        </Link>
        <div
          onClick={() => {
            this.colourAdd();
          }}
          className="page4__button"
        />
      </div>
    );
  }
}

export default Page4;
