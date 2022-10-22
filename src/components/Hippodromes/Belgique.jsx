import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Belgique extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Belgique Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/belgique"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Belgique</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/mons.jpg")}
                alt="mons"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Mons</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable de Mouen et PSF</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 345 m</div>
                  <div className="divHippodrome">Belgique</div>
                  <div className="divHippodrome">Wallonie</div>
                  <div className="divHippodrome">Mons-Ghlin</div>
                  <div className="divHippodrome">Hippodrome de Wallonie</div>
                </h6>
              </div>
            </div>
          </Fade>

          <div className="nomListe">Ostende</div>
          <div className="nomListe">Waregem</div>
          
        </div>
      </div>
    );
  }
}

export default Belgique;
