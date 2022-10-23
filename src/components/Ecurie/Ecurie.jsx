import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from '../HeaderMobile'
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Ecurie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hippodromes Ecurie Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hippodromes/ecurie"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="accueilHippodrome">
          
     
          
        </div>
      </div>
    );
  }
}

export default Ecurie;
