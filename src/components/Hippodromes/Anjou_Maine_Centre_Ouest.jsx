import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Anjou_Maine_Centre_Ouest extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Anjou-Maine-Centre-Ouest Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/anjou_maine_centre_ouest"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Anjou-Maine-Centre-Ouest</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/angers.jpg")}
                alt="angers"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Angers</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 801 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Maine-et-Loire</div>
                  <div className="divHippodrome">Angers</div>
                  <div className="divHippodrome">Hippodrome d'Eventard</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/cholet.jpg")}
                alt="cholet"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Cholet</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 613 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Maine-et-Loire</div>
                  <div className="divHippodrome">Cholet</div>
                  <div className="divHippodrome">Hippodrome de Clénet</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/craon.jpg")}
                alt="craon"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Craon</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Mayenne</div>
                  <div className="divHippodrome">Craon</div>
                  <div className="divHippodrome">Hippodrome de la Touche</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/laval.jpg")}
                alt="laval"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Laval</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 500 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Mayenne</div>
                  <div className="divHippodrome">Laval</div>
                  <div className="divHippodrome">Hippodrome de Bellevue-la-Forêt</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/le_lion.jpg")}
                alt="le_lion"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Le Lion d'Angers</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 625 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Maine-et-Loire</div>
                  <div className="divHippodrome">Le Lion d'Angers</div>
                  <div className="divHippodrome">Hippodrome de l'Isle-Briand</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/meslay.jpg")}
                alt="meslay"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Meslay-du-Maine</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et cendrée</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 750 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Mayenne</div>
                  <div className="divHippodrome">Meslay-du-Maine</div>
                  <div className="divHippodrome">Hippodrome de la Bretonnière</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/segre.jpg")}
                alt="segre"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Segré</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 200 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Maine-et-Loire</div>
                  <div className="divHippodrome">Segré</div>
                  <div className="divHippodrome">Hippodrome de la Lorie</div>
                </h6>
              </div>
            </div>
          </Fade>
          
        </div>
      </div>
    );
  }
}

export default Anjou_Maine_Centre_Ouest;
