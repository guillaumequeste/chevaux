import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Corse extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Corse Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/corse"}
        />
        <Header />
        <HeaderMobile />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Corse (0/4)</h5>
            </Bounce>
          </div>

          <div className="nomListe">Ajaccio</div>
          <div className="nomListe">Biguglia</div>
          <div className="nomListe">Prunelli di Fiumorbu</div>
          <div className="nomListe">Zonza</div>
          
        </div>
      </div>
    );
  }
}

export default Corse;
