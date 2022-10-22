import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Ile_de_France_Haute_Normandie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Ile de France & Haute-Normandie Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/ile_de_france_haute_normandie"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurie2013={true}/>
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Ile de France & Haute-Normandie</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/auteuil.jpg")}
                alt="auteuil"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Auteuil</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">2 400 m</div>
                  <div className="divHippodrome">Ile de France</div>
                  <div className="divHippodrome">Paris 16ème</div>
                  <div className="divHippodrome">Paris</div>
                  <div className="divHippodrome">Hippodrome d'Auteuil</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/bacqueville.jpg")}
                alt="bacqueville"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Bacqueville-en-Caux</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">950 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Seine-Maritime</div>
                  <div className="divHippodrome">Bacqueville-en-Caux</div>
                  <div className="divHippodrome">Hippodrome de Pierreville</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/bernay.jpg")}
                alt="bernay"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Bernay</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 310 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Eure</div>
                  <div className="divHippodrome">Bernay</div>
                  <div className="divHippodrome">Hippodrome Victor Lebrun</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/bihorel.jpg")}
                alt="bihorel"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Bihorel</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 000 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Seine-Maritime</div>
                  <div className="divHippodrome">Rouen</div>
                  <div className="divHippodrome">Hippodrome des Trois Pipes</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/chantilly.jpg")}
                alt="chantilly"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Chantilly</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et PSF</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Hauts-de-France</div>
                  <div className="divHippodrome">Oise</div>
                  <div className="divHippodrome">Chantilly</div>
                  <div className="divHippodrome">Hippodrome de Chantilly</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/chartres.jpg")}
                alt="chartres"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Chartres</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 003 m</div>
                  <div className="divHippodrome">Centre-Val de Loire</div>
                  <div className="divHippodrome">Eure-et-Loire</div>
                  <div className="divHippodrome">Chartres</div>
                  <div className="divHippodrome">Hippodrome de Chartres</div>
                </h6>
              </div>
            </div>
          </Fade>
          
        </div>
      </div>
    );
  }
}

export default Ile_de_France_Haute_Normandie;
