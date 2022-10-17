import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Nord extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Nord Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/nord"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurie2013={true}/>
        <div className="accueil2013">
          
          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/abbeville.jpg")}
                alt="abbeville"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Abbeville</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 400 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Somme</div>
                  <div className="divHippodrome">Abbeville</div>
                  <div className="divHippodrome">Hippodrome de la prairie Malicorne</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/amiens.jpg")}
                alt="amiens"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Amiens</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et pouzzolane</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 262 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Somme</div>
                  <div className="divHippodrome">Amiens</div>
                  <div className="divHippodrome">Hippodrome du petit Saint-Jean</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/arras.jpg")}
                alt="arras"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Arras</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 050 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Pas-de-Calais</div>
                  <div className="divHippodrome">Arras</div>
                  <div className="divHippodrome">Hippodrome des Hauts-Blancs-Monts</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/la_capelle.jpg")}
                alt="la_capelle"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">La Capelle</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable de Mouen</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 609 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Aisne</div>
                  <div className="divHippodrome">La Capelle</div>
                  <div className="divHippodrome">Hippodrome de la Thiérache</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/le_croise.jpg")}
                alt="le_croise"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Le Croisé-Laroche</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et cendrée</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 665 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Nord</div>
                  <div className="divHippodrome">Marcq-en-Baroeul</div>
                  <div className="divHippodrome">Hippodrome des Flandres</div>
                </h6>
              </div>
            </div>
          </Fade>

          
        </div>
      </div>
    );
  }
}

export default Nord;
