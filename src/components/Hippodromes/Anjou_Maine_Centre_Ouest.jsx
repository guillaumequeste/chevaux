import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
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
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Anjou-Maine (9/33)</h5>
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
                <h3 className="nomHippodrome">Angers-Ecouflant</h3>
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
                src={require("../../img/hippodromes/chateau-du-loir.jpg")}
                alt="chateau-du-loir"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Château-du-Loir</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 175 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Sarthe</div>
                  <div className="divHippodrome">Château-du-Loir</div>
                  <div className="divHippodrome">Hippodrome de Bonlieu</div>
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
                src={require("../../img/hippodromes/le_mans.jpg")}
                alt="le_mans"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Le Mans</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 350 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Sarthe</div>
                  <div className="divHippodrome">Le Mans</div>
                  <div className="divHippodrome">Hippodrome des Hunaudières</div>
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

          <div className="nomListe">Beaupréau</div>
          <div className="nomListe">Chinon</div>
          <div className="nomListe">Durtal</div>
          <div className="nomListe">Ecommoy</div>
          <div className="nomListe">Jallais</div>
          <div className="nomListe">La Chartre-sur-le-Loir</div>
          <div className="nomListe">La Roche-Posay</div>
          <div className="nomListe">Mamers</div>
          <div className="nomListe">Méral</div>
          <div className="nomListe">Molières</div>
          <div className="nomListe">Mondoubleau</div>
          <div className="nomListe">Montmirail</div>
          <div className="nomListe">Neuillé Pont Pierre</div>
          <div className="nomListe">Nuillé-sur-Vicoin</div>
          <div className="nomListe">Rochefort-sur-Loire</div>
          <div className="nomListe">Sablé sur Sarthe</div>
          <div className="nomListe">Saint-Ouen-des-Toits</div>
          <div className="nomListe">Saint-Pierre-la-Cour</div>
          <div className="nomListe">Saumur</div>
          <div className="nomListe">Savigny-sur-Braye</div>
          <div className="nomListe">Senonnes-Pouancé</div>
          <div className="nomListe">Sillé-le-Guillaume</div>
          <div className="nomListe">Tours Chambray</div>
          <div className="nomListe">Vibraye</div>
          
        </div>
      </div>
    );
  }
}

export default Anjou_Maine_Centre_Ouest;
