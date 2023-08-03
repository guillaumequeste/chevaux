import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Basse_Normandie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Basse-Normandie Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/basse_normandie"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Basse-Normandie (17/31)</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/argentan.jpg")}
                alt="argentan"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Argentan</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 300 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Orne</div>
                  <div className="divHippodrome">Argentan</div>
                  <div className="divHippodrome">Hippodrome d'Argentan</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/avranches.jpg")}
                alt="avranches"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Avranches</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 200 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Manche</div>
                  <div className="divHippodrome">Avranches</div>
                  <div className="divHippodrome">Hippodrome des Grèves</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/bagnoles_de_l'orne.jpg")}
                alt="bagnoles_de_l_orne"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Bagnoles-de-l'Orne</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 075 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Orne</div>
                  <div className="divHippodrome">Bagnoles-de-l'Orne</div>
                  <div className="divHippodrome">Hippodrome de Bagnoles de l'Orne</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/cabourg.jpg")}
                alt="cabourg"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Cabourg</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 275 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Cabourg</div>
                  <div className="divHippodrome">Hippodrome de Cabourg</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/caen.jpg")}
                alt="caen"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Caen</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 954 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Caen</div>
                  <div className="divHippodrome">Hippodrome de la Prairie</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/clairefontaine.jpg")}
                alt="clairefontaine"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Clairefontaine</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Tourgéville</div>
                  <div className="divHippodrome">Hippodrome de Deauville-Clairefontaine</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/deauville.jpg")}
                alt="deauville"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Deauville</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et PSF</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Deauville</div>
                  <div className="divHippodrome">Hippodrome de Deauville-la-Touques</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/dozule.jpg")}
                alt="dozule"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Dozulé</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 075 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Dozulé</div>
                  <div className="divHippodrome">Hippodrome de la Couperée</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/graignes.jpg")}
                alt="graignes"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Graignes</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 034 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Manche</div>
                  <div className="divHippodrome">Graignes</div>
                  <div className="divHippodrome">Hippodrome du Vieux Château</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/granville.jpg")}
                alt="granville"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Granville</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 400 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Manche</div>
                  <div className="divHippodrome">Granville</div>
                  <div className="divHippodrome">Hippodrome de Longueville-Bréville</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/le_mont.jpg")}
                alt="le_mont"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Le Mont-Saint-Michel</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable rose</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 200 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Manche</div>
                  <div className="divHippodrome">Le Mont-Saint-Michel</div>
                  <div className="divHippodrome">Hippodrome de l'Anse de Moidrey</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/le_pin_au_haras.jpg")}
                alt="le_pin_au_haras"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Le Pin-au-Haras</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Orne</div>
                  <div className="divHippodrome">Argentan</div>
                  <div className="divHippodrome">Hippodrome de la bergerie</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/lisieux.jpg")}
                alt="lisieux"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Lisieux</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 520 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Lisieux</div>
                  <div className="divHippodrome">Hippodrome de la Trésorerie</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/ranes.jpg")}
                alt="ranes"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Rânes</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 055 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Orne</div>
                  <div className="divHippodrome">Rânes</div>
                  <div className="divHippodrome">Hippodrome de Rânes</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/saint-pierre-sur-dives.jpg")}
                alt="saint-pierre-sur-dives"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Saint-Pierre-en-Auge</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 120 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Saint-Pierre-en-Auge</div>
                  <div className="divHippodrome">Hippodrome de la Dives</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/villedieu_les_poeles.jpg")}
                alt="villedieu_les_poeles"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Villedieu-les-Poêles</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">800 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Manche</div>
                  <div className="divHippodrome">Villedieu-les-Poêles-Rouffigny</div>
                  <div className="divHippodrome">Hippodrome de Sautchevreuil</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/vire.jpg")}
                alt="vire"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Vire</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 425 m</div>
                  <div className="divHippodrome">Basse-Normandie</div>
                  <div className="divHippodrome">Calvados</div>
                  <div className="divHippodrome">Vire</div>
                  <div className="divHippodrome">Hippodrome Robert-Auvray</div>
                </h6>
              </div>
            </div>
          </Fade>

          <div className="nomListe">Agon-Coutainville</div>
          <div className="nomListe">Alençon</div>
          <div className="nomListe">Bourigny</div>
          <div className="nomListe">Bréhal</div>
          <div className="nomListe">Carentan-les-Marais</div>
          <div className="nomListe">Cherbourg-en-Cotentin</div>
          <div className="nomListe">Domfront-en-Poiraie</div>
          <div className="nomListe">Genêts</div>
          <div className="nomListe">Jullouville les Pins</div>
          <div className="nomListe">Le Sap</div>
          <div className="nomListe">Moulins-la-Marche</div>
          <div className="nomListe">Portbail</div>
          <div className="nomListe">Sainte-Marie-du-Mont</div>
          <div className="nomListe">Valognes</div>
          
        </div>
      </div>
    );
  }
}

export default Basse_Normandie;
