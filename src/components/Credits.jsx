import React, { Component } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Helmet from "./Helmet";
import Footer from "./Footer";

class Credits extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Crédits Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/credits"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="divCredits">
          <div className="divCredits2">
            <h5>Jérôme Ju</h5>
            <a
              href="https://www.facebook.com/Passioncourseshippiq-1538046549819119"
              target="_blank"
            >
              <h5 className="textContact">Passion Courses Hippiques</h5>
            </a>
            <a href="https://www.equidia.fr" target="_blank">
              <h5 className="textContact">Equidia</h5>
            </a>
            <h5>Pierre Virly (Petrus photo)</h5>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Credits;
