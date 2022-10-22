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

          
          
        </div>
      </div>
    );
  }
}

export default Sud_Ouest;
