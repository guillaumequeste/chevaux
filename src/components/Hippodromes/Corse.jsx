import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
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
        <Footer />
        <div className="accueilHippodrome">
          
          <div className="titreAccueilHippodrome">
            <Bounce top>
              <h5 className="regionHippodrome">Corse</h5>
            </Bounce>
          </div>

          
          
        </div>
      </div>
    );
  }
}

export default Corse;
