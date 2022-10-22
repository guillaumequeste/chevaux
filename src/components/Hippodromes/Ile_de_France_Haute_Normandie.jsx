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
        <Footer />
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
                src={require("../../img/hippodromes/dieppe.jpg")}
                alt="dieppe"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Dieppe</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Seine-Maritime</div>
                  <div className="divHippodrome">Dieppe</div>
                  <div className="divHippodrome">Hippodrome de Rouxmesnil-Bouteilles</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/enghien.jpg")}
                alt="enghien"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Enghien</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 200 m</div>
                  <div className="divHippodrome">Ile-de-France</div>
                  <div className="divHippodrome">Val d'Oise</div>
                  <div className="divHippodrome">Enghien-les-Bains</div>
                  <div className="divHippodrome">Hippodrome d'Enghien-Soisy</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/evreux.jpg")}
                alt="evreux"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Evreux</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 500 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Eure</div>
                  <div className="divHippodrome">Evreux</div>
                  <div className="divHippodrome">Hippodrome de Navarre</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/francheville.jpg")}
                alt="francheville"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Francheville-la Barre</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 125 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Eure</div>
                  <div className="divHippodrome">Mandres</div>
                  <div className="divHippodrome">Hippodrome Georges Pinsard</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/fontainebleau.jpg")}
                alt="fontainebleau"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Fontainebleau</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Ile-de-France</div>
                  <div className="divHippodrome">Seine-et-Marne</div>
                  <div className="divHippodrome">Fontainebleau</div>
                  <div className="divHippodrome">Hippodrome de la Solle</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/gournay.jpg")}
                alt="gournay"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Gournay-en-Bray</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en mâchefer</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 000 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Seine-Maritime</div>
                  <div className="divHippodrome">Forges-les-Eaux</div>
                  <div className="divHippodrome">Hippodrome du Mont Louvet</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/la_ferte-vidame.jpg")}
                alt="la_ferte-vidame"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">La Ferté-Vidame</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 025 m</div>
                  <div className="divHippodrome">Centre-Val de Loire</div>
                  <div className="divHippodrome">Eure-et-Loire</div>
                  <div className="divHippodrome">La Ferté-Vidame</div>
                  <div className="divHippodrome">Hippodrome de Pipe-Souris</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/le_neubourg.jpg")}
                alt="le_neubourg"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Le Neubourg</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">804 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Eure</div>
                  <div className="divHippodrome">Le Neubourg</div>
                  <div className="divHippodrome">Hippodrome Henri Bonnel</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/les_andelys.jpg")}
                alt="les_andelys"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Les Andelys</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 000 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Eure</div>
                  <div className="divHippodrome">Les Andelys</div>
                  <div className="divHippodrome">Hippodrome René Tomasini</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/longchamp.jpg")}
                alt="longchamp"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Longchamp</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">2 500 m</div>
                  <div className="divHippodrome">Ile-de-France</div>
                  <div className="divHippodrome">Paris 16ème</div>
                  <div className="divHippodrome">Paris</div>
                  <div className="divHippodrome">Hippodrome du Bois de Boulogne</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/maisons_laffitte.jpg")}
                alt="maisons_laffitte"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Maisons-Laffitte (fermé)</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche et à droite</div>
                  <div className="divHippodrome">2 000 m</div>
                  <div className="divHippodrome">Ile-de-France</div>
                  <div className="divHippodrome">Yvelines</div>
                  <div className="divHippodrome">Maisons-Laffitte</div>
                  <div className="divHippodrome">Hippodrome de Maisons-Laffitte</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/mauquenchy.jpg")}
                alt="mauquenchy"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Mauquenchy</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 300 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Seine-Maritime</div>
                  <div className="divHippodrome">Forges-les-Eaux</div>
                  <div className="divHippodrome">Hippodrome du Pays de Bray</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/rambouillet.jpg")}
                alt="rambouillet"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Rambouillet</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 800 m</div>
                  <div className="divHippodrome">Ile-de-France</div>
                  <div className="divHippodrome">Yvelines</div>
                  <div className="divHippodrome">Rambouillet</div>
                  <div className="divHippodrome">Hippodrome de la Villeneuve</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/saint_aubin.jpg")}
                alt="saint_aubin"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Saint-Aubin-lès-Elbeuf</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 000 m</div>
                  <div className="divHippodrome">Haute-Normandie</div>
                  <div className="divHippodrome">Seine-Maritime</div>
                  <div className="divHippodrome">Rouen</div>
                  <div className="divHippodrome">Hippodrome des Brulins</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/saint-cloud.jpg")}
                alt="saint-cloud"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Saint-Cloud</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">2 300 m</div>
                  <div className="divHippodrome">Ile-de-France</div>
                  <div className="divHippodrome">Hauts-de-Seine</div>
                  <div className="divHippodrome">Saint-Cloud</div>
                  <div className="divHippodrome">Hippodrome du Val d'Or</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/vincennes.jpg")}
                alt="vincennes"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Vincennes</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en cendrée</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">2 100 m</div>
                  <div className="divHippodrome">Ile-de-France</div>
                  <div className="divHippodrome">Paris 12ème</div>
                  <div className="divHippodrome">Paris</div>
                  <div className="divHippodrome">Hippodrome du Plateau de Gravelle</div>
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
