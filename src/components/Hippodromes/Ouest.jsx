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

          <div className="nomListe">Blain</div>
          <div className="nomListe">Carhaix</div>
          <div className="nomListe">Challans</div>
          <div className="nomListe">Châteaubriant</div>
          <div className="nomListe">Cordemais</div>
          <div className="nomListe">Corlay (Petit Paris)</div>
          <div className="nomListe">Dinan</div>
          <div className="nomListe">Erbray</div>
          <div className="nomListe">Fougères</div>
          <div className="nomListe">Grand Fougeray</div>
          <div className="nomListe">Guer Coëtquidan</div>
          <div className="nomListe">Guerlesquin</div>
          <div className="nomListe">Guingamp</div>
          <div className="nomListe">Josselin</div>
          <div className="nomListe">La Gacilly</div>
          <div className="nomListe">Guerche-de-Bretagne</div>
          <div className="nomListe">La Roche-sur-Yon</div>
          <div className="nomListe">Landivisiau</div>
          <div className="nomListe">Le Pertre</div>
          <div className="nomListe">Les Sables d'Olonne</div>
          <div className="nomListe">Loudéac</div>
          <div className="nomListe">Luçon</div>
          <div className="nomListe">Machecoul</div>
          <div className="nomListe">Mauron</div>
          <div className="nomListe">Morlaix-St Pol</div>
          <div className="nomListe">Niort</div>
          <div className="nomListe">Plessé</div>
          <div className="nomListe">Plestin-les-Grèves</div>
          <div className="nomListe">Ploërmel</div>
          <div className="nomListe">Ploubalay-Lancieux</div>
          <div className="nomListe">Plouescat</div>
          <div className="nomListe">Pontchâteau</div>
          <div className="nomListe">Pontivy</div>
          <div className="nomListe">Pornichet</div>
          <div className="nomListe">Questembert</div>
          <div className="nomListe">Redon</div>
          <div className="nomListe">Rostrenen</div>
          <div className="nomListe">Saint Brieuc</div>
          <div className="nomListe">Saint-Jean-de-Monts</div>
          <div className="nomListe">Savenay</div>
          <div className="nomListe">Thouars</div>
          <div className="nomListe">Vannes</div>
          <div className="nomListe">Vertou</div>
          <div className="nomListe">Vitré</div>
          
        </div>
      </div>
    );
  }
}

export default Ouest;
