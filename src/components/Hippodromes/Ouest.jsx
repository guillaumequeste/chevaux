import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
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
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Ouest (8/48)</h5>
            </Bounce>
          </div>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/les_sables_d_olonne.jpg")}
                alt="les_sables_d_olonne"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Les Sables d'Olonne</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en sable et piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 260 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Vendée</div>
                  <div className="divHippodrome">Talmont Saint Hilaire</div>
                  <div className="divHippodrome">Hippodrome de la Malbrande</div>
                </h6>
              </div>
            </div>
          </Fade>
          
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
                src={require("../../img/hippodromes/nort_sur_erdre.jpg")}
                alt="nort_sur_erdre"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Nort-sur-Erdre</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à gauche</div>
                  <div className="divHippodrome">1 400 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Loire-Atlantique</div>
                  <div className="divHippodrome">Nort-sur-Erdre</div>
                  <div className="divHippodrome">Hippodrome de Beaumont</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/plesse.jpg")}
                alt="plesse"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Plessé</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 400 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Loire-Atlantique</div>
                  <div className="divHippodrome">Plessé</div>
                  <div className="divHippodrome">Hippodrome du Parc de Fresnay</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/saint_brieuc.jpg")}
                alt="saint_brieuc"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Saint-Brieuc</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe et sable</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 450 m</div>
                  <div className="divHippodrome">Bretagne</div>
                  <div className="divHippodrome">Côtes d'Armor</div>
                  <div className="divHippodrome">Yffiniac</div>
                  <div className="divHippodrome">Hippodrome de la Baie</div>
                </h6>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="hippodrome">
              <img
                src={require("../../img/hippodromes/saint-jean-de-monts.jpg")}
                alt="saint-jean-de-monts"
                className="imgHorizontale"
              />
              <div className="infosHippodromes">
                <h3 className="nomHippodrome">Saint-Jean-de-Monts</h3>
                <h6 className="pInfosHippodrome">
                  <div className="divHippodrome">Piste en herbe</div>
                  <div className="divHippodrome">Corde à droite</div>
                  <div className="divHippodrome">1 200 m</div>
                  <div className="divHippodrome">Pays de la Loire</div>
                  <div className="divHippodrome">Vendée</div>
                  <div className="divHippodrome">Saint-Jean-de-Monts</div>
                  <div className="divHippodrome">Hippodrome de l'Atlantique</div>
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
          <div className="nomListe">La Guerche-de-Bretagne</div>
          <div className="nomListe">La Roche-sur-Yon</div>
          <div className="nomListe">Landivisiau</div>
          <div className="nomListe">Le Pertre</div>
          <div className="nomListe">Loudéac</div>
          <div className="nomListe">Luçon</div>
          <div className="nomListe">Machecoul</div>
          <div className="nomListe">Mauron</div>
          <div className="nomListe">Morlaix-St Pol</div>
          <div className="nomListe">Niort</div>
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
