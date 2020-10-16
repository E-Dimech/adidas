import React from "react";
import Modal from "./Modal/Modal";
import Leaf from "../../assets/icons/leaf.png";
import Info from "../../assets/icons/info.svg";
import First from "../../assets/icons/page1.png";

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
        <div className="card-display">
          <div className="card">
            <div className="card__images">
              <img
                className="card__shoe-page"
                src={First}
                alt="sustainable shoe"
              />
              <img className="card__leaf-white" src={Leaf} alt="leaf" />
              <img
                className="card__info-white"
                onClick={() => this.activateModal}
                src={Info}
                alt="information"
              />
            </div>
          </div>
        </div>
        <Modal
          modalDisplay={this.state.modalDisplay}
          closeModal={this.closeModal}
        />
      </>
    );
  }
}

export default Card;
