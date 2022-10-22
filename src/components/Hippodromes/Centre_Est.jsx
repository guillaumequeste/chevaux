import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Centre_Est extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Centre-Est Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/centre_est"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Centre-Est</h5>
            </Bounce>
          </div>

          <div className="nomListe">Aix-les-Bains</div>
          <div className="nomListe">Châteauroux</div>
          <div className="nomListe">Châtillon-sur-Chalaronne</div>
          <div className="nomListe">Cluny</div>
          <div className="nomListe">Divonne-les-Bains</div>
          <div className="nomListe">Feurs</div>
          <div className="nomListe">Julliange</div>
          <div className="nomListe">La Clayette</div>
          <div className="nomListe">Lignières-en-Berry</div>
          <div className="nomListe">Lyon la Soie</div>
          <div className="nomListe">Lyon Parilly</div>
          <div className="nomListe">Montluçon - Néris les Bains</div>
          <div className="nomListe">Moulins</div>
          <div className="nomListe">Paray-le-Monial</div>
          <div className="nomListe">Saint-Galmier</div>
          <div className="nomListe">Vichy</div>
          
        </div>
      </div>
    );
  }
}

export default Centre_Est;
