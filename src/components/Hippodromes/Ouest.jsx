import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Ouest extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Ouest Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/ouest"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Ouest</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/maure_de_bretagne.jpg")}
                alt="maure_de_bretagne"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Maure-de-Bretagne</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 300 m</div>
                  <div className="divHippodrome">Bretagne</div>
                  <div className="divHippodrome">Ile-et-Vilaine</div>
                  <div className="divHippodrome">Rennes</div>
                  <div className="divHippodrome">Hippodrome des Bruyères</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/nantes.jpg")}
                alt="nantes"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Nantes</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">2 068 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Loire-Atlantique</div>
                  <div className="divHippodrome">Nantes</div>
                  <div className="divHippodrome">Hippodrome du Petit Port</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/saint-malo.jpg")}
                alt="saint-malo"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Saint-Malo</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 500 m</div>
                  <div className="divHippodrome">Bretagne</div>
                  <div className="divHippodrome">Ile-et-Vilaine</div>
                  <div className="divHippodrome">Saint-Malo</div>
                  <div className="divHippodrome">Hippodrome de Marville</div>
                </h6>
              </div>
            </div>
          </Fade>
          
        </div>
      </div>
    );
  }
}

export default Ouest;
