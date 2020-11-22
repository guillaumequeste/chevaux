import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Premier_quinte_obstacle extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Premier Quinté obstacle Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/premier_quinte_obstacle"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">1er Quinté en obstacle</h5>
            <p className="infosPage">Belle Promesse</p>
            <p className="infosPage">le 22 septembre 2020 à Auteuil</p>
            <p className="infosPage">avec Baptiste Meme</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premier_quinte_obstacle/1er_quinte_auteuil01.jpg")}
                  alt="1er_quinte_auteuil01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premier_quinte_obstacle/1er_quinte_auteuil02.jpg")}
                  alt="1er_quinte_auteuil02"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premier_quinte_obstacle/1er_quinte_auteuil03.jpg")}
                  alt="1er_quinte_auteuil03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premier_quinte_obstacle/1er_quinte_auteuil04.jpg")}
                  alt="1er_quinte_auteuil04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premier_quinte_obstacle/1er_quinte_auteuil05.jpg")}
                  alt="1er_quinte_auteuil05"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premier_quinte_obstacle/1er_quinte_auteuil06.jpg")}
                  alt="1er_quinte_auteuil06"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Premier_quinte_obstacle;
