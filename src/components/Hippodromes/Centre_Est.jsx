import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Centre_Est extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Centre-Est Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/centre_est"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Centre-Est (1/17)</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/lyon_parilly.jpg")}
                alt="lyon_parilly"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Lyon Parilly</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 800 m</div>
                  <div className="divHippodrome">Auvergne-Rhône-Alpes</div>
                  <div className="divHippodrome">Rhône</div>
                  <div className="divHippodrome">Lyon</div>
                  <div className="divHippodrome">Hippodrome de Parilly</div>
                </h6>
              </div>
            </div>
          </Fade>

          <div className="nomListe">Aix-les-Bains</div>
          <div className="nomListe">Châteauroux</div>
          <div className="nomListe">Châtillon-sur-Chalaronne</div>
          <div className="nomListe">Cluny</div>
          <div className="nomListe">Divonne-les-Bains</div>
          <div className="nomListe">Feurs</div>
          <div className="nomListe">Julliange</div>
          <div className="nomListe">La Clayette</div>
          <div className="nomListe">Lignières-en-Berry</div>
          <div className="nomListe">Lyon la Soie</div>
          <div className="nomListe">Montluçon - Néris les Bains</div>
          <div className="nomListe">Moulins</div>
          <div className="nomListe">Paray-le-Monial</div>
          <div className="nomListe">Saint-Galmier</div>
          <div className="nomListe">Vichy-Auvergne</div>
          <div className="nomListe">Vitteaux</div>
          
        </div>
      </div>
    );
  }
}

export default Centre_Est;
