import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Est extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Est Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/est"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Est (3/8)</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/nancy.jpg")}
                alt="nancy"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Nancy</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et cendrée</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 600 m</div>
                  <div className="divHippodrome">Grand Est</div>
                  <div className="divHippodrome">Meurthe-et-Moselle</div>
                  <div className="divHippodrome">Nancy</div>
                  <div className="divHippodrome">Hippodrome de Nancy-Brabois</div>
                </h6>
              </div>
            </div>
          </Fade>
          
          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/reims.jpg")}
                alt="reims"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Reims</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 156 m</div>
                  <div className="divHippodrome">Grand Est</div>
                  <div className="divHippodrome">Marne</div>
                  <div className="divHippodrome">Reims</div>
                  <div className="divHippodrome">Hippodrome de la Champagne</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/strasbourg.jpg")}
                alt="strasbourg"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Strasbourg</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et mâchefer</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 800 m</div>
                  <div className="divHippodrome">Grand Est</div>
                  <div className="divHippodrome">Bas-Rhin</div>
                  <div className="divHippodrome">Strasbourg</div>
                  <div className="divHippodrome">Hippodrome de Strasbourg-Hoerdt</div>
                </h6>
              </div>
            </div>
          </Fade>

          <div className="nomListe">Châlons-en-Champagne</div>
          <div className="nomListe">Montier-en-Der</div>
          <div className="nomListe">Vesoul</div>
          <div className="nomListe">Vittel</div>
          <div className="nomListe">Wissembourg</div>
          
        </div>
      </div>
    );
  }
}

export default Est;
