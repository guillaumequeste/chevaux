import React, { Component } from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import Helmet from "../Helmet";
import Footer from "../Footer";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

class Hola extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hola de Nappes Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/hola"}
        />
        <Header />
        <HeaderMobile />
        <Footer ecurieXXL={true}/>
        <div className="accueilPremierPartantGalop">
          <Bounce top>
            <h5 className="titrePage">Hola de Nappes</h5>
            <p className="infosPage">10 courses</p>
            <p className="infosPage"></p>
            <p className="infosPage">6 places</p>
          </Bounce>
          <div className="photosPage">
            <Fade right>
              <div className="divPhotoPage">
                <img
                  src={require("../../img/top/hola/hola01.jpg")}
                  alt="hola01"
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

export default Hola;
