import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Highlands extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Highlands d'Allier Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/highlands"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Highlands d'Allier</h5>
            <p className="infosPage">6 courses</p>
            <p className="infosPage">2 victoires</p>
            <p className="infosPage">3 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/highlands/highlands01.jpg")}
                  alt="highlands01"
                  className="photoPageHorizontale"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlands;
