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

          
          
        </div>
      </div>
    );
  }
}

export default Centre_Est;
