import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Korum extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Korum Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/korum"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Korum</h5>
            <p className="infosPage">11 courses</p>
            <p className="infosPage">2 victoires</p>
            <p className="infosPage">5 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/korum/korum1.jpg")}
                  alt="joly1"
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

export default Korum;
