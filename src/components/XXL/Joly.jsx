import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Joly extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Joly And Bach Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/joly"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Joly And Bach</h5>
            <p className="infosPage">8 courses</p>
            <p className="infosPage">2 victoires</p>
            <p className="infosPage">2 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/xxl/joly/joly1.jpg")}
                  alt="joly1"
                  className="photoPageVerticale"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Joly;
