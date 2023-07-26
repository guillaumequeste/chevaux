import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
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
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Nord (10/11)</h5>
            </Bounce>
          </div>

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
                src={require("../../img/hippodromes/compiegne.jpg")}
                alt="compiegne"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Compiègne</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">2 200 m</div>
                  <div className="divHippodrome">Hauts-de-France</div>
                  <div className="divHippodrome">Oise</div>
                  <div className="divHippodrome">Compiègne</div>
                  <div className="divHippodrome">Hippodrome du Putois</div>
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
                src={require("../../img/hippodromes/laon.jpg")}
                alt="laon"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Laon</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste cendrée</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 300 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Aisne</div>
                  <div className="divHippodrome">Laon</div>
                  <div className="divHippodrome">Hippodrome d'Ardon</div>
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

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/le_touquet.jpg")}
                alt="le_touquet"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Le Touquet</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 800 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Pas-de-Calais</div>
                  <div className="divHippodrome">Le Touquet-Paris-Plage</div>
                  <div className="divHippodrome">Hippodrome de la Canche</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/saint-omer.jpg")}
                alt="saint-omer"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Saint-Omer</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste cendrée</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 000 m</div>
                  <div className="divHippodrome">Hauts de France</div>
                  <div className="divHippodrome">Pas-de-Calais</div>
                  <div className="divHippodrome">Saint-Omer</div>
                  <div className="divHippodrome">Hippodrome des Bruyères</div>
                </h6>
              </div>
            </div>
          </Fade>

          <div className="nomListe">Berck-sur-Mer</div>
          
        </div>
      </div>
    );
  }
}

export default Nord;
