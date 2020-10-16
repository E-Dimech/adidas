import React from "react";
// import Modal from "./Modal/Modal";
import Navbar from "../../assets/icons/navbar.png";
import Leaf from "../../assets/icons/leaf.png";
import Info from "../../assets/icons/info.svg";
import White from "../../assets/shoes/WhiteShoe.png";
import Black from "../../assets/shoes/BlackShoe.png";
import Orange from "../../assets/shoes/OrangeShoe.png";
import DNA from "../../assets/shoes/DnaShoe.png";

import "./Card.scss";

class Card extends React.Component {
  state = {
    modalDisplay: false,
  };
  activateModal = () => {
    this.setState({
      modalDisplay: true,
    });
  };
  closeModal = () => {
    this.setState({
      modalDisplay: false,
    });
  };

  render() {
    return (
      <>
        <div className="header-navbar" src={Navbar} alt="navigation bar" />
        <div className="card-display">
          <div className="card">
            <div className="card__images">
              <img className="card__shoe" src={White} alt="sustainable shoe" />
              <img className="card__leaf-white" src={Leaf} alt="leaf" />
              <img
                className="card__info-white"
                onClick={() => this.activateModal}
                src={Info}
                alt="information"
              />
            </div>
          </div>
          <div className="card">
            <div className="card__images">
              <img className="card__shoe" src={Black} alt="sustainable shoe" />
              <img className="card__leaf" src={Leaf} alt="leaf" />
              <img
                className="card__info"
                onClick={() => this.activateModal}
                src={Info}
                alt="information"
              />
            </div>
          </div>
          <div className="card">
            <div className="card__images">
              <img className="card__shoe" src={Orange} alt="sustainable shoe" />
              <img className="card__leaf-orange" src={Leaf} alt="leaf" />
              <img
                className="card__info-orange"
                onClick={() => this.activateModal}
                src={Info}
                alt="information"
              />
            </div>
          </div>
          <div className="card">
            <div className="card__images">
              <img className="card__shoe" src={DNA} alt="sustainable shoe" />
              <img className="card__leaf-dna" src={Leaf} alt="leaf" />
              <img
                className="card__info-dna"
                onClick={() => this.activateModal}
                src={Info}
                alt="information"
              />
            </div>
          </div>
        </div>
      </>
      // <Modal modalDisplay={this.state.modalDisplay} closeModal={this.closeModal} />
    );
  }
}

export default Card;
