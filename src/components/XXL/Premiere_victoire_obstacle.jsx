import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Premiere_victoire_obstacle extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Première victoire obstacle Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/premiere_victoire_obstacle"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">1ère victoire en obstacle</h5>
            <p className="infosPage">Belle Promesse</p>
            <p className="infosPage">le 29 mai 2020 à Bordeaux</p>
            <p className="infosPage">avec Thomas Beaurain</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_obstacle/victoire_belle_bordeaux01.jpg")}
                  alt="victoire_belle_bordeaux01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_obstacle/victoire_belle_bordeaux02.jpg")}
                  alt="victoire_belle_bordeaux02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_obstacle/victoire_belle_bordeaux03.jpg")}
                  alt="victoire_belle_bordeaux03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_obstacle/victoire_belle_bordeaux04.jpg")}
                  alt="victoire_belle_bordeaux04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/premiere_victoire_obstacle/victoire_belle_bordeaux05.jpg")}
                  alt="victoire_belle_bordeaux05"
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

export default Premiere_victoire_obstacle;
