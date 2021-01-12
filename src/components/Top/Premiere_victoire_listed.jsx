import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Premiere_victoire_listed extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Première victoire Listed Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/premiere_victoire_listed"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurie2013={true} />
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">1ère victoire de Listed</h5>
            <p className="infosPage">Highlands d'Allier</p>
            <p className="infosPage">le 10 janvier 2021 à Cagnes-sur-Mer</p>
            <p className="infosPage">avec Johnny Charron</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/premiere_victoire_listed/victoire_listed_highlands01.jpg")}
                  alt="victoire_listed_highlands01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/premiere_victoire_listed/victoire_listed_highlands02.jpg")}
                  alt="victoire_listed_highlands02"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/premiere_victoire_listed/victoire_listed_highlands03.jpg")}
                  alt="victoire_listed_highlands03"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/premiere_victoire_listed/victoire_listed_highlands04.jpg")}
                  alt="victoire_listed_highlands04"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/premiere_victoire_listed/victoire_listed_highlands05.jpg")}
                  alt="victoire_listed_highlands05"
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

export default Premiere_victoire_listed;
