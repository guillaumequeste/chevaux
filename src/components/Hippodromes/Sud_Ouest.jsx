import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Sud_Ouest extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Sud-Ouest Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/sud_ouest"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Sud-Ouest</h5>
            </Bounce>
          </div>

          <div className="nomListe">Agen</div>
          <div className="nomListe">Angoulême</div>
          <div className="nomListe">Auch</div>
          <div className="nomListe">Aurillac</div>
          <div className="nomListe">Bagnères-de-Luchon</div>
          <div className="nomListe">Beaumont-de-Lomagne</div>
          <div className="nomListe">Biarritz</div>
          <div className="nomListe">Bordeaux</div>
          <div className="nomListe">Carcassonne</div>
          <div className="nomListe">Castelsarrasin</div>
          <div className="nomListe">Castéra-Verduzan</div>
          <div className="nomListe">Castillonnès</div>
          <div className="nomListe">Cazaubon-Barbotan</div>
          <div className="nomListe">Chatelaillon-La Rochelle</div>
          <div className="nomListe">Dax</div>
          <div className="nomListe">Eauze</div>
          <div className="nomListe">Fleurance</div>
          <div className="nomListe">Gabarret</div>
          <div className="nomListe">Gémozac</div>
          <div className="nomListe">Gramat</div>
          <div className="nomListe">Grenade-sur-Garonne</div>
          <div className="nomListe">Issigeac</div>
          <div className="nomListe">Jarnac</div>
          <div className="nomListe">La Réole</div>
          <div className="nomListe">La Teste de Buch</div>
          <div className="nomListe">Langon-Libourne</div>
          <div className="nomListe">Lannemezan</div>
          <div className="nomListe">Le Dorat</div>
          <div className="nomListe">Limoges</div>
          <div className="nomListe">Luxé</div>
          <div className="nomListe">Mansle</div>
          <div className="nomListe">Miramont-de-Guyenne</div>
          <div className="nomListe">Monflanquin</div>
          <div className="nomListe">Monpazier</div>
          <div className="nomListe">Mont de Marsan</div>
          <div className="nomListe">Montauban</div>
          <div className="nomListe">Montignac</div>
          <div className="nomListe">Pau</div>
          <div className="nomListe">Pompadour</div>
          <div className="nomListe">Royan la Palmyre</div>
          <div className="nomListe">Tarbes</div>
          <div className="nomListe">Toulouse</div>
          <div className="nomListe">Trie-sur-Baïse</div>
          <div className="nomListe">Valence-sur-Baïse</div>
          <div className="nomListe">Vic Fezensac</div>
          <div className="nomListe">Villeneuve-sur-Lot</div>
          <div className="nomListe">Villeréal</div>
          
        </div>
      </div>
    );
  }
}

export default Sud_Ouest;
