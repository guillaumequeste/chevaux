import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Galante extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Galante d'Arthel Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/galante"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Galante d'Arthel</h5>
            <p className="infosPage">14 courses</p>
            <p className="infosPage">2 victoires</p>
            <p className="infosPage">8 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/galante/galante1.jpg")}
                  alt="galante1"
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

export default Galante;
