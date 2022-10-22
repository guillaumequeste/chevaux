import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Sud_Est extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Sud-Est Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/sud_est"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Sud-Est</h5>
            </Bounce>
          </div>

          <div className="nomListe">Avignon</div>
          <div className="nomListe">Bollène</div>
          <div className="nomListe">Cagnes-sur-Mer</div>
          <div className="nomListe">Carpentras</div>
          <div className="nomListe">Cavaillon</div>
          <div className="nomListe">Hyères</div>
          <div className="nomListe">L'Isle sur la Sorgue</div>
          <div className="nomListe">Marseille-Borély</div>
          <div className="nomListe">Marseille-Vivaux</div>
          <div className="nomListe">Nîmes</div>
          <div className="nomListe">Oraison</div>
          <div className="nomListe">Salon-de-Provence</div>
          <div className="nomListe">Sault</div>
          
        </div>
      </div>
    );
  }
}

export default Sud_Est;
